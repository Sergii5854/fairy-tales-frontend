import React, {Component} from 'react';
import './styles.styl';
import axios from 'axios'
import PaginationStrip from '../pagination-strip';
import {Route, Redirect} from 'react-router-dom';

const grabKeys = (data) => {
    const keys = data.reduce((memo, row) => ([
        ...memo,
        ...Object.keys(row).filter(key => !memo.includes(key))
    ]), []);
    let dataTypes = {};
    keys.forEach(key => {
        const set = new Set();
        data.forEach(row => {
            if (row[key] === null || row[key] === undefined) {
                return;
            }
            if (['boolean', 'string', 'number'].includes(typeof row[key])) {
                set.add(typeof row[key]);
            }
            if (row[key] instanceof Date) {
                set.add('date');
            }
        });
        if (set.size === 1) {
            dataTypes = {
                ...dataTypes,
                [key]: set.values().next().value
            };
        }
    });

    return {keys, dataTypes};
};

const sortDataSet = (data, dataTypes, sortKey, sortOrderAsc) => {
    const multiplier = sortOrderAsc ? 1 : -1;

    switch (dataTypes[sortKey]) {
        case 'number':
            return data.sort((a, b) => (a[sortKey] - b[sortKey]) * multiplier);
        case 'boolean':
            return data.sort((a, b) => (Number(a[sortKey]) - Number((b[sortKey]))) * multiplier);
        case 'string':
            return data.sort((a, b) => {
                if (a[sortKey] && b[sortKey]) {
                    if (a[sortKey] < b[sortKey]) {
                        return -1 * multiplier;
                    }
                    if (a[sortKey] > b[sortKey]) {
                        return multiplier;
                    }
                    return 0;
                }

                if (a[sortKey]) {
                    return -1 * multiplier;
                } else {
                    return multiplier;
                }
            });
        default: // date
            return data.sort((a, b) => {
                let res;

                if (a[sortKey] && b[sortKey]) {
                    res = b[sortKey].getTime() - a[sortKey].getTime();
                } else if (a[sortKey]) {
                    res = 1;
                } else {
                    res = -1;
                }

                return res * multiplier;
            });
    }
};

const setNewDate = (props) => {
    const {keys, dataTypes} = grabKeys(props.data);
    const sortKey = props.sortKey || keys[0];
    const sortOrderAsc = typeof (props.sortOrderAsc) === 'boolean' ? props.sortOrderAsc : true;

    return {
        currentPage: 1,
        pageSize: 10,
        sortOrderAsc,
        data: sortDataSet(props.data, dataTypes, sortKey, sortOrderAsc),
        keys,
        dataTypes,
        sortKey
    }
};

class DataTable extends Component<Props, State> {
    static defaultProps = {
        onSort: (sortKey, sortOrderAsc) => undefined
    };

    constructor(props) {
        super(props);
        this.state = setNewDate(props);
    }

    componentWillReceiveProps(nextProps) {
        const {data, sortKey, sortOrderAsc} = this.props;

        if (nextProps.data !== data || nextProps.sortKey !== sortKey || nextProps.sortOrderAsc !== sortOrderAsc) {
            this.setState(setNewDate(nextProps));
        }
    }

    changePage = (currentPage: number, pageSize: number) => {
        this.setState({currentPage, pageSize});
    };

    sort = (sortKey: string, sortOrderAsc: boolean) => {
        this.setState(({data, dataTypes}) => {
            return {
                sortKey,
                sortOrderAsc,
                currentPage: 1,
                data: sortDataSet(data, dataTypes, sortKey, sortOrderAsc)
            };
        }, () => this.props.onSort(sortKey, sortOrderAsc));
    };

    getFairytale = (data) => {
        console.log("fairytale id : ", data, typeof data);
        axios.get(`https://tales-server.herokuapp.com/api/v1/fairytales/${data}`)
            .then(response => {
                let data = response.data['fairytales']
                console.log(data);

                if (true) {
                    console.log('/fairytales/' + data);
                  return  <Route  path="/fairytales/33" render={() => (<Redirect to={'/fairytales/33' }/>)} />
                }
            })
    }

    render() {
        const {currentPage, pageSize, data, keys, sortKey, sortOrderAsc, dataTypes} = this.state;

        return (
            <div className="table">
                <table>
                    <thead>
                    <tr>
                        {keys.map(key => (
                            <th key={key}>
                                {key}
                                {key !== sortKey || !sortOrderAsc ? (
                                    <a style={{cursor: 'pointer'}} onClick={() => this.sort(key, true)}>&#x25B2;</a>
                                ) : null}
                                {key !== sortKey || sortOrderAsc ? (
                                    <a style={{cursor: 'pointer'}} onClick={() => this.sort(key, false)}>&#x25BC;</a>
                                ) : null}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((row, rowNumber) => (
                        <tr key={rowNumber}
                            className={`table__row `}
                            onClick={() => this.getFairytale(row['#'])}
                        >
                            {/*axios here */}
                            {keys.map(key => (

                                <td key={key}>
                                    {(() => {
                                        if (row[key] !== undefined && row[key] !== null) {
                                            if (dataTypes[key] === 'date') {
                                                if (row[key] instanceof Date) {
                                                    return row[key].toISOString().replace(/T00:00:00.000Z/, '');
                                                }
                                            } else {
                                                return row[key];
                                            }
                                        }
                                    })()}
                                </td>
                            ))}
                        </tr>
                    ))}
                    </tbody>
                </table>
                <PaginationStrip
                    totalCount={data.length}
                    currentPage={currentPage}
                    pageSize={pageSize}
                    onChange={this.changePage}
                />
            </div>
        );
    }
}

export default DataTable;