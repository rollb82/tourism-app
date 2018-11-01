import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


//import logo from './logo.svg';
import './App.css';

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
            <div className="app-header">
              place nav here
            </div>
            <div className="app-main-container">
              <Route exact path="/" component={ToursList} />
              <Route exact path="/tour/:id" component={Tour} />
              <Route path="/tour/:id/audio/:id" component={AudioPlayer} />
            </div>
            <div className="app-footer">

            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
