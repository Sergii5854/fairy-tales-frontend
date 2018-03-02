// @flow

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './styles.styl';

import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

import Home from '../routes/home';
import NobelLaureates from '../routes/nobel-laureates';
import PageNotFound from '../routes/page-not-found';
import UsageStatistics from '../routes/usage-statistics';
import store from '../store';

class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <div style={{width: 180, float: 'left'}}>
                            <h1>Side Menu</h1>
                            <ul style={{listStyleType: 'none'}}>
                                <li>
                                    <NavLink to="/nobel-laureates">Nobel Laureates</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/usage-statistics">Usage Statistics</NavLink>
                                </li>
                                <li style={{marginLeft: 20}}>
                                    <NavLink to="/usage-statistics/chart">Chart</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div style={{float: 'left'}}>
                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route path="/nobel-laureates" component={NobelLaureates}/>
                                <Route path="/usage-statistics" component={UsageStatistics}/>
                                <Route component={PageNotFound}/>
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;