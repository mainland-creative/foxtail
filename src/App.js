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

  constructor(props) {
    super(props)
    this.state = {
      mobileMenuOpen: false
    }
  }

  handleMenuLauncherClick = (e) => {
    this.setState({
      mobileMenuOpen: !this.state.mobileMenuOpen
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <header className="NavContainer">
              <div className="Nav">
                <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
                <button className="NavLauncher" id="NavLauncher" key="NavLauncher" aria-expanded={this.state.mobileMenuOpen} onClick={this.handleMenuLauncherClick}>
                  <svg width="51" height="46" viewBox="0 0 51 46" xmlns="http://www.w3.org/2000/svg"><g id="B---04---Offices" fill="none" fillRule="evenodd" transform="translate(-70 -70)"><g id="hamburger" transform="translate(70 70)" fill="#333"><polygon id="Fill-3" points="0.567123288 2.74542466 50.8334247 2.74542466 50.8334247 0.280767123 0.567123288 0.280767123" /><polygon id="Fill-5" points="0.567123288 45.011726 50.8334247 45.011726 50.8334247 42.5470685 0.567123288 42.5470685" /><polygon id="Fill-6" points="0.567123288 23.8774795 50.8334247 23.8774795 50.8334247 21.4139178 0.567123288 21.4139178" /></g></g></svg>
                </button>
                <ul className="NavLinks">
                  <button className="NavDismiss" onClick={this.handleMenuLauncherClick}>
                    <svg width="52" height="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg"><g id="D---01.1---Showcase---Welcome-Menu" fill="none" fillRule="evenodd" transform="translate(-70 -67)"><polygon id="close" fill="#333" points="119.497 66.9999 95.627 90.8689 71.757 66.9999 70 68.7589 93.869 92.6279 70 116.4969 71.757 118.2559 95.627 94.3869 119.497 118.2559 121.256 116.4969 97.387 92.6279 121.256 68.7589" /></g></svg>
                  </button>
                  <li><NavLink to="/about" onClick={this.handleMenuLauncherClick}>About</NavLink></li>
                  <li><NavLink to="/events" onClick={this.handleMenuLauncherClick}>Events</NavLink></li>
                  <li><NavLink to="/gallery" onClick={this.handleMenuLauncherClick}>Gallery</NavLink></li>
                  <li><NavLink to="/venues" onClick={this.handleMenuLauncherClick}>Venues</NavLink></li>
                  <li><NavLink to="/contact" onClick={this.handleMenuLauncherClick}>Contact</NavLink></li>
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
