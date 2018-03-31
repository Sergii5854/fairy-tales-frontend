import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './styles.styl';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import store from '../store';

import Home from '../routes/home';

import Fairytales from '../routes/fairytales';
import Favorite from '../routes/favorite';
import AudioFairytales from '../routes/audio-fairy-tales';
import FairytaleAdmin from '../routes/fairytale-admin';

import Folk from '../routes/folk';
import Author from '../routes/author';
import RecentUploaded from '../routes/recent-uploaded';
import Lullabies from '../routes/lullabies';
import NobelLaureates from '../routes/nobel-laureates';
import PageNotFound from '../routes/page-not-found';
import UsageStatistics from '../routes/usage-statistics';

import ItemFairytal from './../routes/item-fairytele';
import Login from './../routes/login';
import Registration from './../routes/registration';

import Header from '../components/header';
import Footer from '../components/footer';


import Sidebar from '../components/sidebar';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="main">
                        <Sidebar/>
                        <div className="main__content">
                            {/*<Header/>*/}
                            <div className="main__routers">
                                <Switch>
                                    <Route exact path="/" component={Fairytales}/>
                                    <Route path="/fairytales/:id" component={ItemFairytal}/>
                                    <Route path="/fairytales" component={Fairytales}/>
                                    <Route path="/fairytales/:id" component={ItemFairytalAdmin}/>
                                    <Route path="/fairytales" component={FairytalesAdmin}/>
                                    {/*<Route path="/beloved" component={Favorite}/>*/}
                                    <Route path="/audio-fairy-tales" component={AudioFairytales}/>
                                    <Route path="/fairytale-admin" component={FairytaleAdmin}/>
                                    <Route path="/folk" component={Folk}/>
                                    <Route path="/author" component={Author}/>
                                    <Route path="/lullabies" component={Lullabies}/>
                                    <Route path="/recent-uploaded" component={RecentUploaded}/>
                                    <Route path="/nobel-laureates" component={NobelLaureates}/>
                                    <Route path="/usage-statistics" component={UsageStatistics}/>
                                    <Route path="/login" component={Login}/>
                                    <Route path="/registration" component={Registration}/>

                                    <Route component={PageNotFound}/>
                                </Switch>
                            </div>
                            {/*<Footer/>*/}
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
