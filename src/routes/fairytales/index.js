
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