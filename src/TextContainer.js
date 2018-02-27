import React, { Component } from 'react'
import './TextContainer.css'

class TextContainer extends Component {
  render () {
    let style = {
      container: {
        height: "320px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "75%",
        height: "100%",
        flexDirection: "column"
      },
      label: {
        display: "flex",
        justifyContent: "center",
        fontSize: "34px",
        maxWidth: "500px",
        alignItems: "center",
        paddingBottom: "30px",
        paddingTop: this.props.top ? "30px" : "0px"
      },
      message: {
        display: "flex",
        justifyContent: "center",
        fontSize: "18px",
        width: "660px",
      }
    }

    if (this.props.bgColor) {
      style.container.backgroundColor = this.props.bgColor
    }
    return <div style={style.container}>
      <div style={style.content}>
        <div style={style.label}>
          {this.props.label}
        </div>
        <div style={style.message}>
          {this.props.message}
        </div>
      </div>
    </div>
  }
}

export default TextContainer
