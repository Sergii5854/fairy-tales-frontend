// @flow

import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

import Table from './table';
import Chart from './chart';
import PageNotFound from '../../routes/page-not-found';

import type {ContextRouter} from 'react-router-dom';

type Props = ContextRouter;

class UsageStatistics extends Component<Props> {
    render() {
        const {match} = this.props;

        return (
            <Switch>
                <Route path={`${match.url}/chart`} component={Chart}/>
                <Route path={`${match.url}`} component={Table}/>
                <Route component={PageNotFound}/>
            </Switch>
        );
    }
}

export default UsageStatistics;