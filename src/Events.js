import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import logo from './Foxtail_Logo_White.svg'
import TextContainer from './TextContainer'
import PhotoContainer from './PhotoContainer'
import MixedContainer from './MixedContainer'
import MultiMixedContainer from './MultiMixedContainer'
import ContactContainer from './ContactContainer'
import Footer from './Footer'
import { getModel, extractAssetUrls } from './CMS'

class Events extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.getModel()
  }

  async getModel () {
    const model = await getModel('5uX0j1oWVGAm02C6QoyuMo')
    this.setState({ data: model.items[0].fields })
  }

  renderNav () {
    return (
      <div className="NavContainer">
        <div className="Nav">
          <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link style={{ borderBottom: '2px solid black', color: 'black' }}to="/events">Events</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/venues">Venues</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    )
  }

  render () {
    if (!this.state.data) return null

    const {
      headingLabel,
      headingMessage,
      mixedContainerLeft1,
      mixedPhoto1,
      photoCarousel1,
      textLabel1,
      textMessage1,
      numberedMessageTop,
      numberedMessageBottom,
      numberedPhotoCarousel,
      photoCarousel2,
      textLabel2,
      textMessage2,
      mixedPhoto2,
      mixedMessage2,
      photoCarousel3,
      textLabel3,
      textMessage3,
      mixedMessage3,
      mixedMessage3_5,
      mixedLabel3,
      mixedPhoto3,
      textLabel4,
      textMessage4
    } = this.state.data

    return (
      <div>
        {this.renderNav()}

        <TextContainer
          bgColor="#C7D0D4"
          label={headingLabel}
          message={headingMessage}
          top
        />
        <MixedContainer
          left={{ ...mixedContainerLeft1, bgColor: "#F2EAE9" }}
          right={[]}
          images={extractAssetUrls(mixedPhoto1)}
        />
        <PhotoContainer images={extractAssetUrls(photoCarousel1)} />
        <TextContainer
          bgColor="#fff"
          label={textLabel1}
          message={textMessage1} />
        <MultiMixedContainer
          messages={[numberedMessageTop, numberedMessageBottom]}
          images={extractAssetUrls(numberedPhotoCarousel)}
        />
        <PhotoContainer images={extractAssetUrls(photoCarousel2)} />
        <TextContainer
          bgColor="#fff"
          label={textLabel2}
          message={textMessage2}
        />
        <MixedContainer
          left={[]}
          right={ { message: [mixedMessage2] }}
          images={extractAssetUrls(mixedPhoto2)}
        />
        <PhotoContainer images={extractAssetUrls(photoCarousel3)} />
        <TextContainer
          bgColor="#fff"
          label={textLabel3}
          message={textMessage3}
        />
        <MixedContainer
          left={ { label: mixedLabel3, message: [mixedMessage3, mixedMessage3_5] } }
          images={extractAssetUrls(mixedPhoto3)}
          right={[]}
        />
        <ContactContainer label={textLabel4} message={textMessage4} />
        <Footer />
      </div>
    )
  }
}

export default Events
