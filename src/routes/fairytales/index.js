
import React, {Component} from 'react';

import fairytales from './tales-8f587-export.json';
import DataTable from '../../components/data-table';
import type {Data} from '../../components/data-table';



class Fairytales extends Component {
    state = {};

    componentDidMount() {
        const data = fairytales
            .map(({id,  name,}) => {
                const res = {
                    '#': Number(id),
                    'Name': name

                };

                if (res.Born === '0000-00-00') {
                    delete res.Born;
                } else {
                    res.Born = new Date(Date.parse(res.Born.replace('-00-00', '-01-01')));
                }

                if (res.Died === '0000-00-00') {
                    delete res.Died;
                } else {
                    res.Died = new Date(Date.parse(res.Died.replace('-00-00', '-01-01')));
                }

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
            <DataTable data={data}/>
        )
    }
}

export default Fairytales;