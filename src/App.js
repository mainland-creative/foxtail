import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link
} from 'react-router-dom'

import './Nav.css'
import './App.css'
import logo from './Foxtail_Logo_White.svg'

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
            <header className="NavContainer">
              <div className="Nav">
                <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
                <ul>
                  <li><NavLink to="/about">About</NavLink></li>
                  <li><NavLink to="/events">Events</NavLink></li>
                  <li><NavLink to="/gallery">Gallery</NavLink></li>
                  <li><NavLink to="/venues">Venues</NavLink></li>
                  <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
              </div>
            </header>
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
