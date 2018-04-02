import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles.styl';

import Home from '../routes/home';

import Fairytales from '../routes/fairytales';
import ItemFairytal from './../routes/item-fairytele';
import AudioFairytales from '../routes/audio-fairy-tales';
import Folk from '../routes/folk';
import Author from '../routes/author';
import RecentUploaded from '../routes/recent-uploaded';
import Lullabies from '../routes/lullabies';
import PageNotFound from '../routes/page-not-found';
import FairytaleAdmin from '../routes/fairytale-admin';
import ItemFairytalAdmin from './../routes/item-fairytele-admin';
import Login from './../routes/login';
import Registration from './../routes/registration';

import Header from '../components/header';
import Footer from '../components/footer';


import Sidebar from '../components/sidebar';


class App extends Component {
    render() {
        v1
        console.log(" v from 02 / 04");
        return (

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
                                <Route path="/audio-fairy-tales" component={AudioFairytales}/>
                                <Route path="/folk" component={Folk}/>
                                <Route path="/author" component={Author}/>
                                <Route path="/lullabies" component={Lullabies}/>
                                <Route path="/recent-uploaded" component={RecentUploaded}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/registration" component={Registration}/>

                                <Route path="/fairytales-admin/:id" component={ItemFairytalAdmin}/>
                                <Route path="/fairytales-admin" component={FairytaleAdmin}/>

                                <Route component={PageNotFound}/>
                            </Switch>
                        </div>
                        {/*<Footer/>*/}
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
