import React, { Component } from 'react'
import { chunk } from 'lodash'

class TeamContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      members: this.props.members || [],
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

  componentWillReceiveProps (nextProps) {
    this.setState({ members: nextProps.members })
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
    if (this.state.members && this.state.members.length === 0) return 0
    if (this.state.viewport.width < 1300) {
      let height = 600
      if (this.state.members.length > 2) height = 1200
      if (this.state.members.length > 4) height = 1800
      if (this.state.members.length > 6) height = 2400
      return 4000
    } else {
      let height = 600
      if (this.state.members.length > 3) height = 1200
      if (this.state.members.length > 6) height = 1800
      return 2500
    }
  }

  render () {
    const style = {
      container: {
        height: `${this._setHeight()}px`,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "Column",
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
        height: "90%",
        width: "415px",
        minWidth: "350px",
      },
      itemInfo: {
        fontSize: "34px",
        paddingTop: "20px"
      },
      itemInfoSecondary: {
        fontSize: "20px",
        paddingTop: "5px"
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
    const makeFull = function (groups, MEMBERS_PER_ROW) {
      const last = groups[groups.length - 1]
      let gaps = MEMBERS_PER_ROW - last.length
      while (gaps > 0) {
        last.push({})
        gaps--
      }
    }

    const buildRows = function (members, width) {
      if (members.length === 0) return null
      const MEMBERS_PER_ROW = width < 1300 ? 2 : 3

      let groups = chunk(members, MEMBERS_PER_ROW)
      makeFull(groups, MEMBERS_PER_ROW)

      return groups.map((group, idx) => {
        return (
          <div style={style.flexRow} key={idx}>
            {group.map((m, idx) => {
              return (
                <div style={style.rowItem} key={idx}>
                  <div style={{...style.itemImage, backgroundImage: `url(${m.img})`}}></div>
                  <div style={style.itemInfo}>{m.name}</div>
                  <div style={style.itemInfoSecondary}>{m.title}</div>
                </div>
              )
             })
            }
          </div>
        )
      })
    }

    return (
      <div style={style.container}>
        {buildRows(this.state.members || [], this.state.viewport.width)}
      </div>
    )
  }
}

export default TeamContainer
