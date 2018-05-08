import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'

import logo from './Foxtail_Logo_White.svg'
import './Home.css'
import { getModel } from './CMS'

import volume from './volume-up-4-xxl.png'
import mute from './mute-2-xxl.png'
import playButton from './play-button.svg'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      muted: true,
      showVolume: false,
      videoPlaying: !this.videoRef.paused
    }

    this.getModel()
  }
  videoRef = React.createRef()

  async getModel () {
    const model = await getModel('65u5lkjGCW2e2W48ISgg6C')
    this.setState({ data: model.items[0].fields })
  }

  changeAudio = () => {
    this.setState({ muted: !this.state.muted })
  }

  showVolume = () => {
    if (this.state.showVolume) {
      return ''
    } else {
      return '--hidden'
    }
  }

  toggleVolume = () => {
    const showVolume = this.state.showVolume
    this.setState({ showVolume : !this.state.showVolume })
  }

  toggleVideoPlayback = (e) => {
    const video = this.videoRef.current
    if (video.paused) {
      video.play()
      this.setState({
        videoPlaying: true
      })
    } else {
      video.pause()
      this.setState({
        videoPlaying: false
      })
    }
  }

  render () {
    if (!this.state.data) return null
    const { foxtailVideo, videoPoster } = this.state.data

    const videoStyle = {
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      cursor: 'pointer',
      position: 'relative',
      height: document.documentElement.clientHeight - 65,
      width: document.documentElement.clientWidth
    }
    const playButtonStyle  = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      opacity: '.5',
      zIndex: '5',
      transform: 'translate(-50%, -50%)',
      pointerEvents: 'none',
      display: this.state.videoPlaying ? 'none' : 'block'
    }

    return (
      <div>
        <div onMouseEnter={this.toggleVolume} onMouseLeave={this.toggleVolume} style={videoStyle} className="Home">
          <img src={playButton} alt='Toggle Playback' style={playButtonStyle} />
          <video style={ {...videoStyle, paddingTop: '0px', overflow: 'hidden' }} src={foxtailVideo.fields.file.url} poster={videoPoster.fields.file.url} loop muted={this.state.muted} autoPlay playsInline ref={this.videoRef} onClick={this.toggleVideoPlayback} />
          <div onClick={this.changeAudio} className={`SoundIcon${this.showVolume()}`}>
            <img style={{ height: '30px', width: '30px' }} src={this.state.muted ? mute : volume }></img>
          </div>
        </div>
      </div>
     )
  }
}

export default Home
