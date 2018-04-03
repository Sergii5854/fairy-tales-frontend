import React, {Component} from 'react';

import DataTable from '../../components/data-table';

import Header from './../../components/header/'
import ButtonAdd from './../../components/button-add/'
import axios from 'axios'

class FairytaleAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {

            data: []
        }
    }

    componentDidMount() {

        axios.get('https://tales-server.herokuapp.com/api/v1/fairytales-admin')
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
                <ButtonAdd/>
            </div>
        )
    }
}

export default FairytaleAdmin;