import React, { Component } from 'react'
import Radium from 'radium'

import { chunk } from 'lodash'

import {
  Link
} from 'react-router-dom'

import MoreGrey from './gallery_more.png'
import MoreBlack from './gallery_more_black.png'

class GalleryMedia extends Component {
  constructor (props) {
    super(props)

    this.changePlatedArrowToBlack = this.changePlatedArrowToBlack.bind(this)
    this.changePlatedArrowToGrey = this.changePlatedArrowToGrey.bind(this)
    this.changePassedArrowToBlack = this.changePassedArrowToBlack.bind(this)
    this.changePassedArrowToGrey = this.changePassedArrowToGrey.bind(this)
    this.changeStationsArrowToBlack = this.changeStationsArrowToBlack.bind(this)
    this.changeStationsArrowToGrey = this.changeStationsArrowToGrey.bind(this)
    this.changeSweetsArrowToBlack = this.changeSweetsArrowToBlack.bind(this)
    this.changeSweetsArrowToGrey = this.changeSweetsArrowToGrey.bind(this)

    this._resize = this._resize.bind(this)
    this._setHeight = this._setHeight.bind(this)
    this.state = {
      plated: MoreGrey,
      stations: MoreGrey,
      passed: MoreGrey,
      sweets: MoreGrey,
      viewport: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      },
      arrows: {
        Plated: {
          black: this.changePlatedArrowToBlack,
          grey: this.changePlatedArrowToGrey,
        },
        Passed: {
          black: this.changePassedArrowToBlack,
          grey: this.changePassedArrowToGrey
        },
        Stations: {
          black: this.changeStationsArrowToBlack,
          grey: this.changeStationsArrowToGrey
        },
        Sweets: {
          black: this.changeSweetsArrowToBlack,
          grey: this.changeSweetsArrowToGrey
        }
      }
    }


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
        height: document.documentElement.clientHeight
      }
    })
  }

  _setHeight () {
    if (this.state.viewport.width < 1200) {
      return "2100px"
    } else {
      return "1050px"
    }
  }

  changePlatedArrowToGrey () {
    this.setState({plated: MoreGrey})
  }
  changePlatedArrowToBlack () {
    this.setState({plated: MoreBlack})
  }
  changeStationsArrowToGrey () {
    this.setState({stations: MoreGrey})
  }
  changeStationsArrowToBlack () {
    this.setState({stations: MoreBlack})
  }
  changePassedArrowToGrey () {
    this.setState({passed: MoreGrey})
  }
  changePassedArrowToBlack () {
    this.setState({passed: MoreBlack})
  }
  changeSweetsArrowToGrey () {
    this.setState({sweets: MoreGrey})
  }
  changeSweetsArrowToBlack () {
    this.setState({sweets: MoreBlack})
  }

  _buildRows (images, width, style) {
    const ROW_COUNT = width > 1200 ? 2 : 1
    const groups = chunk(images, ROW_COUNT)
    return groups.map((g, index) => {
      return (
        <div style={style.flexRow} key={index}>
          {g.map((i, idx) => {
             return (
               <div style={style.rowItem} key={idx}>
                 <Link
                   onMouseEnter={this.state.arrows[i.label].black}
                   onMouseLeave={this.state.arrows[i.label].grey}
                   style={{ ...style.itemImage, backgroundImage: `url(${i.href})` }}
                   to={i.loc}>
                 </Link>
                 <div style={style.itemInfo}>
                   <div style={style.itemInfoLabel}>{i.label}</div>
                   <div style={style.itemInfoMore}>
                     <Link
                       to={i.loc}
                       key={i.label} style={style.more}
                       onMouseEnter={this.state.arrows[i.label].black}
                       onMouseLeave={this.state.arrows[i.label].grey}>
                       <div style={{ paddingRight: "24px" }}>View More</div>
                       <img src={this.state[i.label.toLowerCase()]} alt="more" />
                     </Link>
                   </div>
                 </div>
               </div>
             )
           })
          }
        </div>
      )
    })
  }

  _setRowItemPadding() {
    if (this.state.viewport.width < 1200) {
      return "0px"
    } else {
      return "50px"
    }
  }

  render () {
    const style = {
      container: {
        height: this._setHeight(),
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
      },
      flexRow: {
        display: "flex",
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
      },
      rowItem: {
        display: "flex",
        flexDirection: "column",
        height: "80%",
        width: "100%",
        paddingTop: this._setRowItemPadding(),
        "@media (min-width: 640px)": {
          width: "600px",
        }
      },
      itemInfo: {
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "0 1.25em",
        "@media (min-width: 600px)": {
          padding: "0",
        }
      },
      itemInfoLabel: {
        paddingTop: "20px",
        fontSize: "34px",
        color: "black",
      },
      itemInfoMore: {
        color: "#999999",
      },
      itemImage: {
        flex: 4,
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      more: {
        cursor: "pointer",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        color: "#787878",
        textDecoration: "none",
        ':hover': {
          color: "black"
        },
        "@media (max-width: 599px)": {
          padding: '0 1em',
        }
      }
    }
    return (
      <div style={style.container}>
        {this._buildRows(this.props.images, this.state.viewport.width, style)}
      </div>
    )
  }
}

export default Radium(GalleryMedia)
