import React, {Component} from 'react';

import DataTable from '../../components/data-table';

import Header from './../../components/header/'
import axios from 'axios'
import Loader from 'react-loader-spinner'

class Fairytales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }


    }

    componentDidMount() {
        axios.get('https://tales-server.herokuapp.com/api/v1/fairytales')
            .then(response => {
                let data = response.data['fairytales']
                let dataALL = data
                    .map(({id, name,}) => {
                        const res = {
                            '#': Number(id),
                            'Name': name
                        };
                        return res;
                    });
                this.setState({
                    data: dataALL
                })
            })
    }

    render() {
        let {data} = this.state;

        if (!this.state.data.length) {
            return (
                <div className="loader">

                </div>
            )
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