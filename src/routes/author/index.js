import React, {Component} from 'react';
import DataTable from '../../components/data-table';
import Header from './../../components/header/';
import axios from 'axios';

export default class Author extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get('https://tales-server.herokuapp.com/api/v1/author')
            .then(response => {
                let data = response.data['authors']

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
                  subTitle="Авторські"
                  background="#сc76276b"
              />
              <DataTable data={data}/>
          </div>
        )
    }
};
