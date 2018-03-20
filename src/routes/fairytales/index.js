import React, {Component} from 'react';

import fairytales from './tales-8f587-export.json';
import DataTable from '../../components/data-table';

import Header from './../../components/header/'


class Fairytales extends Component {
    state = {};

    componentDidMount() {
        const data = fairytales
            .map(({id, name,}) => {
                const res = {
                    '#': Number(id),
                    'Name': name

                };

                return res;
            });
        this.setState({data});
    }

    render() {
        const {data} = this.state;

        if (!data) {
            return 'Loading...';
        }

        return (
            <div>
                <Header
                    title="Казки дитинства"
                    subTitle="Аудіо казки"
                    background="#dc76276b"
                />
                <DataTable data={data}/>
            </div>
        )
    }
}

export default Fairytales;