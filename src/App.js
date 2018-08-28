import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppHeader from './components/shared/AppHeader';
import AppHeaderNavigation from './components/shared/AppHeaderNavigation';
import 'font-awesome/css/font-awesome.min.css';


import tourReducer from './reducers/tourReducer';
import ToursContainer from './components/tours/ToursContainer';
import TourContainer from './components/tour/TourContainer';
import PointContainer from './components/point/PointContainer';
import LocationContainer from './components/location/LocationContainer';
import LoadingComponent from './components/shared/LoadingComponent';
import AppNavigation from './components/shared/AppNavigation';
import AppFooter from './components/shared/AppFooter';
import PageShell from './components/shared/PageShell';
import PointAudioPlayer from './components/shared/PointAudio/PointAudioPlayer';

import logo from './images/story-house-logo.png';

import './styles/index.css';

const store = createStore(tourReducer, applyMiddleware(thunk, logger));


class App extends Component {

  componentDidUpdate() {
    console.log('updated');
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
          <PointAudioPlayer />
            <AppHeader logo={logo} />
            <AppHeaderNavigation />
            <AppNavigation />
            <div className="container">
              <div className="row">
                <LoadingComponent />
                <Route exact path="/" component={PageShell(ToursContainer)} />
                <Route path="/tour/:id" component={PageShell(TourContainer)} />
                <Route path="/location/:id" component={PageShell(LocationContainer)} />
                <Route path="/point/:id" component={PageShell(PointContainer)} />
              </div>
            </div>
            
                <AppFooter />
          </div>
        </Router>
      </Provider>
    );
  }
}


export default App;


