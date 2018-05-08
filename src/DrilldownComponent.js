import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import line from './subnav_line.png'
import cross from './cross.png'
import PhotoContainer from './PhotoContainer'
import Radium from 'radium'

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
        flexDirection: 'column',
        position: 'relative'
      },
      label: {
        height: "20%",
        fontSize: '34px',
        paddingTop: '47px'
      },
      subNav: {
        height: "40%",
      },
      subNavList: {
        display: "flex",
        listStyle: "none",
        padding: '0',
        margin: '0',
      },
      navItem: {
        margin: '0 0 0 0',
        '@media (max-width: 500px)': {
          margin: '0 .5em'
        }
      },
      navLink: {
        color: '#000000',
        textDecoration: 'none',
        ':visited': {
          color: '#000000'
        },
      },
      closeLink: {
        position: "absolute",
        right: "2em"
      },
      line: {
        paddingLeft: '12px',
        paddingRight: '12px',
        '@media (max-width: 500px)': {
          display: 'none',
        }
      }
    }
    switch (type) {
      case 'plated':
        return (
          <div style={style.subNavContainer}>
            <div style={style.label}>Gallery</div>
            <div style={style.subNav}>
              <ul style={style.subNavList}>
                <li style={style.navItem}><Link style={{borderBottom: '2px solid', ...style.navLink}} to="/gallery/plated">Plated</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navItem}><Link style={style.navLink} to="/gallery/passed">Passed</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navItem}><Link style={style.navLink} to="/gallery/stations">Stations</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navItem}><Link style={style.navLink} to="/gallery/sweets">Sweets</Link></li>
              </ul>
            </div>
            <Link to="/gallery" style={style.closeLink}><img src={cross} alt="cross" /></Link>
          </div>
        )
      case 'passed':
        return (
          <div style={style.subNavContainer}>
            <div style={style.label}>Gallery</div>
            <div style={style.subNav}>
              <ul style={style.subNavList}>
                <li style={style.navItem}><Link style={style.navLink} to="/gallery/plated">Plated</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navItem}><Link style={{borderBottom: '2px solid', ...style.navLink}} to="/gallery/passed">Passed</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navItem}><Link style={style.navLink} to="/gallery/stations">Stations</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navItem}><Link style={style.navLink} to="/gallery/sweets">Sweets</Link></li>
              </ul>
            </div>
            <Link style={style.closeLink} to="/gallery"><img src={cross} alt="cross" /></Link>
          </div>
        )
      case 'stations':
        return (
          <div style={style.subNavContainer}>
            <div style={style.label}>Gallery</div>
            <div style={style.subNav}>
              <ul style={style.subNavList}>
                <li style={style.navItem}><Link style={style.navLink} to="/gallery/plated">Plated</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navItem}><Link style={style.navLink} to="/gallery/passed">Passed</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navItem}><Link style={{borderBottom: '2px solid', ...style.navLink}} to="/gallery/stations">Stations</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navItem}><Link style={style.navLink} to="/gallery/sweets">Sweets</Link></li>
              </ul>
            </div>
            <Link style={style.closeLink} to="/gallery"><img src={cross} alt="cross" /></Link>
          </div>
        )
      case 'sweets':
        return (
          <div style={style.subNavContainer}>
            <div style={style.label}>Gallery</div>
            <div style={style.subNav}>
              <ul style={style.subNavList}>
                <li style={style.navItem}><Link style={style.navLink} to="/gallery/plated">Plated</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navItem}><Link style={style.navLink} to="/gallery/passed">Passed</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navItem}><Link style={style.navLink} to="/gallery/stations">Stations</Link></li>
                <img style={style.line} src={line} alt="line"/>
                <li style={style.navItem}><Link style={{borderBottom: '2px solid', ...style.navLink}} to="/gallery/sweets">Sweets</Link></li>
              </ul>
            </div>
            <Link style={style.closeLink} to="/gallery"><img src={cross} alt="cross" /></Link>
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

export default Radium(DrilldownComponent)
