import React, {Component} from 'react';

import fairytales from './tales-8f587-export.json';
import DataTable from '../../components/data-table';

import Header from './../../components/header/'
import axios from 'axios'

class Fairytales extends Component {
    constructor (props) {
        super(props);
        this.state = {

            data: []
        }


    }

    componentDidMount() {

        // axios.get('https://tales-server.herokuapp.com/api/v1/fairytales')
        //     .then(response => {
        //
        //         this.setState({
        //              data: response.data['fairytales']
        //         })
        //     })

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

        if (!this.state.data.length) {
            return 'Loading...';
        }


        return (
            <div>
                <Header
                    title="Казки дитинства"
                    subTitle="Всі казки"
                    background="#dc76276b"
                />
                <DataTable data={data}/>
            </div>
        )
    }
}

export default Fairytales;