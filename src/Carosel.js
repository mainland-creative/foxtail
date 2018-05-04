import React, { Component } from 'react'

import rightArrow from './right_arrow_white.png'
import leftArrow from './left_arrow_white.png'

class Carosel extends Component {
  constructor(props) {
    super(props)
    this.style =  {
      leftArrow: {
        display: 'inline',
        cursor: 'pointer',
        position: 'absolute',
        left: '3%',
        bottom: '50%'
      },
      rightArrow: {
        display: 'inline',
        cursor: 'pointer',
        position: 'absolute',
        right: '3%',
        bottom: '50%'
      },
      counterBox: {
        position: 'absolute',
        width: '179px',
        height: '100px',
        backgroundColor: 'grey',
        bottom: '0%'
      },
      counterLabel: {
        position: 'absolute',
        width: '200px',
        fontSize: '50px',
        color: '#fff',
        left: '0',
        bottom: '0',
        marginTop: '18px',
        marginLeft: '-10px'
      }
    }
  }

  renderLeftArrow () {
    if ((this.props.curr === 1 && !this.props.wrap) || this.props.hidden) return null
    return (
      <img style={this.style.leftArrow} src={leftArrow} alt="leftArrow" onClick={this.props.decr}/>
    )
  }

  renderRightArrow () {
    if ((this.props.curr === this.props.max && !this.props.wrap) || this.props.hidden) return null
    return (
      <img style={this.style.rightArrow} src={rightArrow} alt="rightArrow" onClick={this.props.incr}/>
    )
  }

  format (num) {
    if (num >= 10) return num
    return '0' + num
  }

  renderCounterBox () {
    if (this.props.max <= 1 || this.props.wrap) return null
    return (
      <div style={this.style.counterBox}>
        <span style={this.style.counterLabel}>{this.format(this.props.curr)} / {this.format(this.props.max)}</span>
      </div>
    )
  }

  render() {
    return (
      <div style={{ height: '100%', position: 'relative', width: '100%' }}>
        {this.renderLeftArrow()}
        {this.renderRightArrow()}
        {this.renderCounterBox()}
      </div>
    )
  }
}

export default Carosel
