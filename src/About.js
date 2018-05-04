import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import logo from './Foxtail_Logo_White.svg'
import TextContainer from './TextContainer'
import PhotoContainer from './PhotoContainer'
import MixedContainer from './MixedContainer'
import TeamContainer from './TeamContainer'
import Footer from './Footer'
import { getModel, extractAssetUrls } from './CMS'

class About extends Component {
  constructor (props) {
    super(props)
    this.state = {
      viewport: {
        width: document.documentElement.clientWidth
      }
    }
    this.getModel()

    this._resize = this._resize.bind(this)
  }

  async getModel () {
    const model = await getModel('lShdfWMVriowGAMicmgss')
    this.setState({ data: model.items[0].fields })
  }

  componentDidMount () {
    window.addEventListener('resize', this._resize);
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this._resize);
  }

  _resize () {
    this.setState({
      viewport: {
        width: document.documentElement.clientWidth,
      }
    })
  }

  render () {
    if (!this.state.data) return null

    const {
      headingLabel,
      aboutMessage,
      textLabel1,
      textMessage1,
      photoCarosel1,
      photoCarousel2,
      mixedLabel1,
      mixedMessage1,
      mixedPhoto1,
      textLabel2,
      textMessage2,
      photoCarousel3,
      mixedPhoto2,
      mixedLabel2,
      mixedMessage2,
      textLabel3,
      textMessage3,
      teamList
    } = this.state.data

    return (
      <div>
        <TextContainer
          label={headingLabel}
          bgColor="#F2EAE9"
          message={aboutMessage}
          top
        />
        <PhotoContainer images={extractAssetUrls(photoCarosel1)} />
        <TextContainer
          bgColor="#fff"
          label={textLabel1}
          message={textMessage1}
        />
        <PhotoContainer images={extractAssetUrls(photoCarousel2)} />
        <MixedContainer
          left={
            {
              label: mixedLabel1,
              message: mixedMessage1
            }
          }
          images={extractAssetUrls(mixedPhoto1)}
          right={[]}
        />
        <PhotoContainer images={extractAssetUrls(photoCarousel3)} />
        <TextContainer
          bgColor="#fff"
          label={textLabel2}
          message={textMessage2}
        />
        <MixedContainer
          left={[]}
          images={extractAssetUrls(mixedPhoto2)}
          right={
            {
              label: mixedLabel2,
              message: mixedMessage2,
              bgColor: "#F2EAE9"
            }
          }
        />
        <TextContainer
          bgColor="#fff"
          label={textLabel3}
          message={textMessage3}
        />
        <TeamContainer members={teamList.members} />
        <Footer />
      </div>
    )
  }
}

export default About
