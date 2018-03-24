
import React, {Component} from 'react';

import laureates from './laureate.json';
import DataTable from '../../components/data-table';
import type {Data} from '../../components/data-table';



class NobelLaureates extends Component<Props, State> {
    state = {};

    componentDidMount() {
        const data = laureates
            .map(({id, firstname, surname, born, died, bornCountry, bornCity, diedCountry, diedCity, gender, prizes}) => {
                const res = {
                    '#': Number(id),
                    'First Name': firstname,
                    'Last Name': surname,
                    'Born': born,
                    'Died': died,
                    'Born Location': [bornCity, bornCountry].filter(i => i).join(', '),
                    'Died Location': [diedCity, diedCountry].filter(i => i).join(', '),
                    'Gender': gender,
                    'Prizes': prizes
                        .filter(({year, category}) => year && category)
                        .map(({year, category}) => `${category}, ${year}`).join('; ')
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

export default NobelLaureates;