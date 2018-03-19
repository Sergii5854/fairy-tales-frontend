
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './styles.styl';

import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import store from '../store';

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

import Header from '../components/header';
import Footer from '../components/footer';


import Sidebar from '../components/sidebar';



class App extends Component<{}> {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="main">
                        <Sidebar/>
                        <div className="content">
                            <Header/>

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
                            <Footer/>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;