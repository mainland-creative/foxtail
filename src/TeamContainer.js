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

  render () {
    const style = {
      container: {
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
      },
      rowContainer: {
        display: "flex",
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
      },
      rowItem: {
        display: "flex",
        flexDirection: "column",
        height: "30em",
        width: "415px",
        marginBottom: "50px",
        '@media (min-width: 440px)': {
          minWidth: "300px",

        }
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
        flex: 1,
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

      return <div style={style.rowContainer}>
          {members.map((m, idx) => {
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
  }

    return (
      <div style={style.container}>
        {buildRows(this.state.members || [], this.state.viewport.width)}
      </div>
    )
  }
}

export default TeamContainer
