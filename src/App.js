import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import './Nav.css'
import './App.css';

import Home from './Home'
import About from './About'
import Events from './Events'
import Gallery from './Gallery'
import Venues from './Venues'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/events" component={Events}/>
            <Route exact path="/gallery" component={Gallery}/>
            <Route path="/venues" component={Venues}/>
            <Route path="/contact" component={Contact}/>
            <Route exact path="/gallery/plated" render={() => <Gallery override="Plated" />}/>
            <Route exact path="/gallery/passed" render={() => <Gallery override="Passed" />}/>
            <Route exact path="/gallery/stations" render={() => <Gallery override="Stations" />}/>
            <Route exact path="/gallery/sweets" render={() => <Gallery override="Sweets" />}/>
          </div>
        </Router>

        <div className="App-header">
        </div>
      </div>
    );
  }
}

export default App;
