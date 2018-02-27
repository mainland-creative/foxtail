import React, { Component } from 'react'
import Carosel from './Carosel'

class PhotoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arrows: false,
      counter: 1,
      imageIdx: 1
    }

    this.style =  {
      container: {
        height: "800px",
        backgroundColor: "black",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }
    }

    this.incr = this.incr.bind(this)
    this.decr = this.decr.bind(this)
    this.hideArrows = this.hideArrows.bind(this)
    this.showArrows = this.showArrows.bind(this)
    this.toggleArrows = this.toggleArrows.bind(this)
  }

  toggleArrows () {
    this.setState({ toggleArrows: !this.state.toggleArrows })
  }

  incr () {
    let newIdx
    if (this.state.imageIdx === this.props.images.length) {
      newIdx = 1
    } else {
      newIdx = this.state.imageIdx + 1
    }

    this.setState({ counter: this.state.counter + 1, imageIdx: newIdx })
  }

  decr () {
    let newIdx
    if (this.state.imageIdx === 1) {
      newIdx = this.props.images.length
    } else {
      newIdx = this.state.imageIdx - 1
    }

    this.setState({ counter: this.state.counter - 1, imageIdx: newIdx })
  }

  showArrows () {
    this.setState({ arrows: true })
  }

  hideArrows () {
    this.setState({ arrows: false })
  }

  render () {
    return (
      <div
        style={
          {
            ...this.style.container,
            backgroundImage: `url(${this.props.images[this.state.imageIdx - 1]})`
          }
        }
        onMouseEnter={this.showArrows}
        onMouseLeave={this.hideArrows}
        >
        <Carosel
          wrap={this.props.wrap}
          hidden={!this.state.arrows}
          incr={this.incr}
          decr={this.decr}
          curr={this.state.counter}
          max={this.props.images.length}
        />
      </div>
    )
  }
}

export default PhotoContainer
