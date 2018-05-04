import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import logo from './Foxtail_Logo_White.svg'

import TextContainer from './TextContainer'
import VenuesContainer from './VenueMedia'
import Footer from './Footer'

import { getContent } from './CMS'

class Venues extends Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.getModel()
  }

  async getModel () {
    const venues = await getContent('venue')
    this.setState({ venues })
  }

  render() {
    if (!this.state.venues) return null
    return (
      <div>
        <TextContainer
          bgColor="#C7D0D4"
          label="Venues"
          top
        />
        <VenuesContainer
          venues={this.state.venues}
        />
        <Footer />
      </div>
    )
  }
}

export default Venues
