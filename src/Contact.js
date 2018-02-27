import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import logo from './Foxtail_Logo_White.svg'

import TextContainer from './TextContainer'
import ContactContainer from './ContactContainer'
import PhotoContainer from './PhotoContainer'
import MixedContainer from './MixedContainer'
import { getModel, extractAssetUrls } from './CMS'

import Footer from './Footer'

import './Contact.css'

class Contact extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: null
    }

    this.getModel()
  }

  async getModel () {
    const model = await getModel('9mWJUFSTTOSie2cAcu8wC')
    this.setState({ data: model.items[0].fields })
  }

  render () {
    if (!this.state.data) return null

    const {
      textLabel1,
      textMessage1,
      photoContainer1,
      textLabel2,
      textMessage2,
      testMessage3
    } = this.state.data

    return (
      <div>
        <div className="NavContainer">
          <div className="Nav">
            <Link to="/"><img className="logo" src={logo} alt="logo"/></Link>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/venues">Venues</Link></li>
              <li><Link style={{ borderBottom: '2px solid black', color: 'black' }}to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
        <ContactContainer label={textLabel1} message={textMessage1} top />
        <PhotoContainer images={extractAssetUrls(photoContainer1)} />
        <TextContainer
          bgColor="#C7D0D4"
          label={textLabel2}
          message={textMessage2}
        />

        <MixedContainer
          left={{ message: testMessage3}}
          images={
            ['https://user-images.githubusercontent.com/1156704/27988125-5259c720-63cf-11e7-9f00-6fe8fa2770fa.png']
          }
          right={[]}
          map
        />
        <Footer />
      </div>
    )
  }
}

export default Contact
