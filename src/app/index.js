
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './styles.styl';

import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';

import Home from '../routes/home';

import Fairytales from '../routes/fairytales';
import Favorite from '../routes/favorite';
import AudioFairytales from '../routes/audio-fairy-tales';
import Folk from '../routes/folk';
import Author from '../routes/author';
import RecentUploaded from '../routes/recent-uploaded';
import Lullabies from '../routes/lullabies';
import NobelLaureates from '../routes/nobel-laureates';
import PageNotFound from '../routes/page-not-found';
import UsageStatistics from '../routes/usage-statistics';
import store from '../store';
import Faivorite from "../routes/favorite/index";

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
                                    <NavLink to="/fairytales">Всі казки</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/beloved">Улюблені</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/audio-fairy-tales">Аудіо казки</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/folk">Народні</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/author">Авторські</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/lullabies">Колискові</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/recent-uploaded">Останні завантаженні</NavLink>
                                </li>
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
                                <Route path="/fairytales" component={Fairytales}/>
                                <Route path="/beloved" component={Favorite}/>
                                <Route path="/audio-fairy-tales" component={AudioFairytales}/>
                                <Route path="/folk" component={Folk}/>
                                <Route path="/author" component={Author}/>
                                <Route path="/lullabies" component={Lullabies}/>
                                <Route path="/recent-uploaded" component={RecentUploaded}/>
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