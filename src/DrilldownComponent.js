import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import line from './subnav_line.png'
import cross from './cross.png'
import PhotoContainer from './PhotoContainer'

class DrilldownComponent extends Component {
  renderSubNav(type) {
    const style = {
      subNavContainer: {
        height: '300px',
        width: '100%',
        paddingTop: '65px',
        backgroundColor: '#E9DCDB',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
      },
      label: {
        height: "20%",
        fontSize: '34px',
        paddingTop: '47px'
      },
      subNav: {
        height: "40%",
      },
      navLink: {
        margin: '0 0 0 0'
      },
      line: {
        paddingLeft: '12px',
        paddingRight: '12px'
      }
    }
    switch (type) {
      case 'plated':
        return (
          <div style={style.subNavContainer}>
            <div style={style.label}>Gallery</div>
            <div style={style.subNav}>
              <ul>
                <li style={style.navLink}><Link style={{ borderBottom: '2px solid black', color: 'black' }} to="/gallery/plated">Plated</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navLink}><Link to="/gallery/passed">Passed</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navLink}><Link to="/gallery/stations">Stations</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navLink}><Link to="/gallery/sweets">Sweets</Link></li>
              </ul>
            </div>
            <Link to="/gallery"><img src={cross} alt="cross" /></Link>
          </div>
        )
      case 'passed':
        return (
          <div style={style.subNavContainer}>
            <div style={style.label}>Gallery</div>
            <div style={style.subNav}>
              <ul>
                <li style={style.navLink}><Link to="/gallery/plated">Plated</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navLink}><Link style={{ borderBottom: '2px solid black', color: 'black' }} to="/gallery/passed">Passed</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navLink}><Link to="/gallery/stations">Stations</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navLink}><Link to="/gallery/sweets">Sweets</Link></li>
              </ul>
            </div>
            <Link to="/gallery"><img src={cross} alt="cross" /></Link>
          </div>
        )
      case 'stations':
        return (
          <div style={style.subNavContainer}>
            <div style={style.label}>Gallery</div>
            <div style={style.subNav}>
              <ul>
                <li style={style.navLink}><Link to="/gallery/plated">Plated</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navLink}><Link to="/gallery/passed">Passed</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navLink}><Link style={{ borderBottom: '2px solid black', color: 'black' }} to="/gallery/stations">Stations</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navLink}><Link to="/gallery/sweets">Sweets</Link></li>
              </ul>
            </div>
            <Link to="/gallery"><img src={cross} alt="cross" /></Link>
          </div>
        )
      case 'sweets':
        return (
          <div style={style.subNavContainer}>
            <div style={style.label}>Gallery</div>
            <div style={style.subNav}>
              <ul>
                <li style={style.navLink}><Link to="/gallery/plated">Plated</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navLink}><Link to="/gallery/passed">Passed</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navLink}><Link to="/gallery/stations">Stations</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navLink}><Link style={{ borderBottom: '2px solid black', color: 'black' }} to="/gallery/sweets">Sweets</Link></li>
              </ul>
            </div>
            <Link to="/gallery"><img src={cross} alt="cross" /></Link>
          </div>
        )
      default:
        break
    }
  }

  render () {
    return (
      <div>
        {this.renderSubNav(this.props.type)}
        <PhotoContainer
          images={this.props.images}
          wrap
        />
      </div>
    )
  }
}

export default DrilldownComponent
