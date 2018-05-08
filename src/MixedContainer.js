import React, { Component } from 'react'
import Carosel from './Carosel'
import Showdown from 'showdown'
import './MixedContainer.css'

class MixedContainer extends Component {
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

  maybeRenderDot () {
    const dots = {
      solidDot: {
        position: 'absolute',
        right: '30%',
        background: "#999999",
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        marginRight: "14px",
        marginTop: "-79px"
      },
      smallRing: {
        position: 'absolute',
        right: '30%',
        background: "transparent",
        border: "2px solid #e5e5e5",
        width: "38px",
        height: "38px",
        borderRadius: "50%",
        marginRight: "6px",
        marginTop: "-87px"
      },
      largeRing: {
        position: 'absolute',
        right: '30%',
        background: "transparent",
        border: "2px solid #e5e5e5",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        marginTop: "-93px"
      }
    }
  }

  render () {
    let LeftStyle = {
      display: "flex",
      flex: "1",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      float: "left",
      height: "650px",
      maxWidth: "100%",
      minHeight: "650px",
      maxHeight: "100%",
      backgroundColor: "#DDE3E5",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }

    let RightStyle = {
      display: "flex",
      flex: "1",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      float: "left",
      height: "650px",
      maxWidth: "100%",
      minHeight: "650px",
      maxHeight: "100%",
      backgroundColor: "#DDE3E5",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }

    const buildMessage = function (messages) {
      const converter = new Showdown.Converter()

      if (typeof messages === 'string') {
        return <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(messages)}} />
      }
      if (messages[0] === "newline") {
        return messages.slice(1).map(m => <div key={m.toString()}>{m}</div>)
      }

      return messages.map(m => { if (m) {return <p key={m.toString()}>{m}</p> } })
    }

    const buildLabel = function (opts) {
      if (!opts.label) return
      return <div className="LabelMixed">
        {opts.label}
      </div>
    }
    if (this.props.left.message) {
      if (this.props.left.bgColor) {
        LeftStyle.backgroundColor = this.props.left.bgColor
      }
      return (
        <div className="MixedContainer">
          <div style={LeftStyle}>
            {buildLabel(this.props.left)}
            <div className="Message">
              {buildMessage(this.props.left.message)}
            </div>
          </div>
          <div
            style={{...RightStyle, backgroundImage: `url(${this.props.images[this.state.imageIdx - 1]})`}}
            onMouseEnter={this.showArrows}
            onMouseLeave={this.hideArrows}>

            <Carosel
              wrap={false}
              hidden={!this.state.arrows}
              incr={this.incr}
              decr={this.decr}
              curr={this.state.counter}
              max={this.props.images.length}
             />
            {this.maybeRenderDot()}
          </div>
        </div>
      )
    } else {
      if (this.props.right.bgColor) {
        RightStyle.backgroundColor = this.props.right.bgColor
      }
      return (
        <div className="MixedContainer">
          <div
            style={{...LeftStyle, backgroundImage: `url(${this.props.images[this.state.imageIdx - 1]})`}}
            onMouseEnter={this.showArrows}
            onMouseLeave={this.hideArrows}>

            <Carosel
              wrap={false}
              hidden={!this.state.arrows}
              incr={this.incr}
              decr={this.decr}
              curr={this.state.counter}
              max={this.props.images.length}
            />

          </div>
          <div style={RightStyle}>
            {buildLabel(this.props.right)}
            <div className="Message">
              {buildMessage(this.props.right.message)}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default MixedContainer
