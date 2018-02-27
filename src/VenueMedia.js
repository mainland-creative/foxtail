import React, { Component } from 'react'
import { chunk } from 'lodash'
import { extractAssetUrls } from './CMS'

import './VenueMedia.css'

class VenuesContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      venues: this.props.venues,
      viewport: {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    }

    this._resize = this._resize.bind(this)
    this._setHeight = this._setHeight.bind(this)
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
      return "11000px"
    } else {
      return "5500px"
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
        width: "640px",
        minWidth: "500px",
        paddingTop: "50px",
        cursor: "pointer",
      },
      itemInfo: {
        fontSize: "34px",
        paddingTop: "20px",
        textAlign: "left"
      },
      itemInfoLabel: {
        paddingTop: "20px",
        flex: 1,
        fontSize: "34px",
        fontColor: "black",
      },
      itemImage: {
        flex: 4,
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      more: {
        cursor: "pointer",
        ':hover': {
          color: "black"
        }
      }
    }

    const buildRows = function (venues, width) {
      const ROW_COUNT = width < 1200 ? 1 : 2

      let groups = chunk(venues, ROW_COUNT)

      return groups.map((group, idx) => {
        return (
          <div style={style.flexRow} key={idx}>
            {group.map((m, idx) => {
              return (
                <a style={style.rowItem} href={m.url} key={idx}>
                  <div style={{...style.itemImage, backgroundImage: `url(${extractAssetUrls([m.image])})`}}></div>
                  <div style={style.itemInfo}>{m.name}</div>
                </a>
              )
             })
            }
          </div>
        )
      })
    }

    return (
      <div style={style.container}>
        {buildRows(this.state.venues, this.state.viewport.width)}
      </div>
    )
  }
}

export default VenuesContainer
