import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import logo from './Foxtail_Logo_White.svg'
import './Home.css'
import { getModel } from './CMS'

import volume from './volume-up-4-xxl.png'
import mute from './mute-2-xxl.png'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      muted: true,
      showVolume: false
    }

    this.getModel()
    this.changeAudio = this.changeAudio.bind(this)
    this.showVolume = this.showVolume.bind(this)
    this.toggleVolume = this.toggleVolume.bind(this)
  }

  async getModel () {
    const model = await getModel('65u5lkjGCW2e2W48ISgg6C')
    this.setState({ data: model.items[0].fields })
  }

  changeAudio () {
    this.setState({ muted: !this.state.muted })
  }

  showVolume () {
    if (this.state.showVolume) {
      return ''
    } else {
      return '--hidden'
    }
  }

  toggleVolume () {
    this.setState({ showVolume : !this.state.showVolume })
  }

  render () {
    if (!this.state.data) return null
    const { foxtailVideo } = this.state.data

    const videoStyle = {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      paddingTop: '65px',
      height: document.documentElement.clientHeight - 65,
      width: document.documentElement.clientWidth
    }

    return (
      <div>
        <div onMouseEnter={this.toggleVolume} onMouseLeave={this.toggleVolume} style={videoStyle} className="Home">
          <video style={ {...videoStyle, paddingTop: '0px', overflow: 'hidden' }} src={foxtailVideo.fields.file.url} loop muted={this.state.muted} autoPlay />
          <div onClick={this.changeAudio} className={`SoundIcon${this.showVolume()}`}>
            <img style={{ height: '30px', width: '30px' }} src={this.state.muted ? mute : volume }></img>
          </div>
        </div>
      </div>
     )
  }
}

export default Home
