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
      testMessage3,
      mapImage
    } = this.state.data

    return (
      <div>
        <ContactContainer label={textLabel1} message={textMessage1} />
        <PhotoContainer images={extractAssetUrls(photoContainer1)} />
        <TextContainer
          bgColor="#C7D0D4"
          label={textLabel2}
          message={textMessage2}
        />

        <MixedContainer
          left={{ message: testMessage3}}
          images={[mapImage.fields.file.url]}
          right={[]}
          map
        />
        <Footer />
      </div>
    )
  }
}

export default Contact
