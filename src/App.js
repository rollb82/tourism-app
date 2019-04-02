import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


//import logo from './logo.svg';
import logo from './img/story-house-logo.png';
import './styles/index.css';
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.min.css';

//reducers
import TourListReducer from './pages/ToursLists/reducers';
import TourReducer from './pages/Tour/reducers';
import AudioPlayerReducer from './pages/AudioPlayer/reducers';

//components
import ToursList from './pages/ToursLists';
import Tour from './pages/Tour';
import AudioPlayer from './pages/AudioPlayer';

const store = createStore(
  combineReducers({
    TourListReducer,
    TourReducer,
    AudioPlayerReducer
  }),
  applyMiddleware(
    logger, thunk
  ));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <div className=" app-header">
              <div className="container">
                <div className="row" style={{ color: '#000' }}>
                  <div className="col-lg-2">
                    <a className="logo-left" href="/">
                    <img src={logo} />
                    </a>
                  </div>
                  <div className="col-lg-10">
                    <div className="app-navigation">
                      <a href="javascript:void(0)">Menu</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="app-main-container container">
              <Route exact path="/" component={ToursList} />
              <Route exact path="/tour/:id" component={Tour} />
              <Route path="/tour/:id/:locationID" component={AudioPlayer} />
            </div>
            <div className="app-footer">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-3">
                        <p>footer text here</p>
                      </div>
                      <div className="col-lg-3">
                        <p>footer text here</p>
                      </div>
                      <div className="col-lg-3">
                        <p>footer text here</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
