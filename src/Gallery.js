import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import logo from './Foxtail_Logo_White.svg'
import './Gallery.css'
import TextContainer from './TextContainer'
import GalleryMedia from './GalleryMedia'
import DrilldownComponent from './DrilldownComponent'
import Footer from './Footer'
import { getModel, extractAssetUrls } from './CMS'

class Gallery extends Component {
  constructor () {
    super()
    this.state = {
      drillDown: null
    }

    this.getModel()
  }

  async getModel () {
    const model = await getModel('5YR8jKyPjaQIqsGk0W2q4o')
    const { plated, stations, passed, sweets } = model.items[0].fields
    this.setState({
      DRILLDOWN_INFO: {
        Plated: {
          type: 'plated',
          images: extractAssetUrls(plated)
        },
        Stations: {
          type: 'stations',
          images: extractAssetUrls(stations)
        },
        Passed: {
          type: 'passed',
          images: extractAssetUrls(passed)
        },
        Sweets: {
          type: 'sweets',
          images: extractAssetUrls(sweets)
        }
      }
    })
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  renderGallery () {
    return (
      <div>
      <TextContainer
        bgColor="#F2EAE9"
        label="Gallery"
        message=""
        top
      />
      <GalleryMedia
        images={
          [
            {
              href: this.state.DRILLDOWN_INFO.Plated.images[0],
              loc: '/gallery/plated',
              label: 'Plated'
            },
            {
              href: this.state.DRILLDOWN_INFO.Stations.images[0], 
              loc: '/gallery/stations',
              label: 'Stations'
            },
            {
              href: this.state.DRILLDOWN_INFO.Passed.images[0], 
              loc: '/gallery/passed',
              label: 'Passed'
            },
            {
              href: this.state.DRILLDOWN_INFO.Sweets.images[0], 
              loc: '/gallery/sweets',
              label: 'Sweets'
            }
          ]
        }
        drillDown={this.drillDown}
      />
      </div>
    )
  }

  componentWillMount () {
    if (this.props.override) {
      this.setState({ drillDown: this.props.override })
    }
  }
  renderDrilldown () {
    return (
      <div>
        <DrilldownComponent { ...this.state.DRILLDOWN_INFO[this.state.drillDown] } />
      </div>
    )
  }

  render () {
    if (!this.state.DRILLDOWN_INFO) return null
    return (
      <div>
        <div className="NavContainer">
          <div className="Nav">
            <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link style={{ borderBottom: '2px solid black', color: 'black' }}to="/gallery">Gallery</Link></li>
              <li><Link to="/venues">Venues</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        {
          this.state.drillDown ?
          this.renderDrilldown() :
          this.renderGallery()
        }
        <Footer />
      </div>
    )
  }
}

export default Gallery
