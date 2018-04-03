import React, { Component } from 'react'
import Carosel from './Carosel'

class MultiMixedContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arrows: false,
      counter: 1,
      imageIdx: 1
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
    const style =  {
      container: {
        height: "800px",
        display: "flex",
      },
      stackedBoxes: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: "1",
      },
      box: {
        display: "flex",
        alignItems: "center",
        justfyContent: "center",
        flexDirection: "column",
        flex: "1",
        width: "100%",
      },
      images: {
        display: "flex",
        flex: "2",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      },
      label: {
        display: "flex",
        alignItems: "center",
        fontSize: "70px",
        flex: 1,
        color: "#fff"
      },
      message: {
        fontSize: "18px",
        flex: 1,
        width: "100%",
        paddingLeft: "20px",
        paddingRight: "20px"
      }
    }

    const buildMessage = function (messages) {
      if (typeof messages === 'string') {
        return <p>{messages}</p>
      }
      if (messages[0] === "newline") {
        return messages.slice(1).map(m => <div key={m.toString()}>{m}</div>)
      }

      return messages.map(m => { if (m) {return <p key={m.toString()}>{m}</p> } })
    }

    return (
      <div style={style.container}>
        <div style={style.stackedBoxes}>
          <div style={{ ...style.box, backgroundColor: "#DDE3E5" }}>
            <span style={style.label}>{this.props.messages[0].label}</span>
            <span style={style.message}>
              {buildMessage(this.props.messages[0].message)}
            </span>
          </div>
          <div style={{ ...style.box, backgroundColor: "#C7D0D4" }}>
            <span style={style.label}>{this.props.messages[1].label}</span>
            <span style={style.message}>
              {buildMessage(this.props.messages[1].message)}
            </span>
          </div>
        </div>
        <div style={{...style.images, backgroundImage: `url(${this.props.images[this.state.imageIdx - 1]})`}}>
          <Carosel
            wrap={false}
            hidden={!this.state.arrows}
            incr={this.incr}
            decr={this.decr}
            curr={this.state.counter}
            max={this.props.images.length}
          />
        </div>
      </div>
    )
  }
}

export default MultiMixedContainer
