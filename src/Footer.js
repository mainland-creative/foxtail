import React, { Component, Fragment } from 'react'
import logo from './Foxtail_Logo_Black.svg'
import { getModel } from './CMS'
import Showdown from 'showdown'

import './Footer.css'

class Footer extends Component {
  constructor (props) {
    super (props)
    this.state = {}
    this.getModel()
  }

  converter = new Showdown.Converter()

  async getModel() {
    const model = await getModel('2vULlJBl6wykMksEaKYOeA')
    this.setState({ data: model.items[0].fields })
  }

  render () {
    if (!this.state.data) return null

    const {
      section1Title, section1Content,
      section2Title, section2Content,
      section3Title, section3Content,
      section4Title, socialMediaAccounts
    } = this.state.data
    return (
      <div className="Footer">
        <div className="LeftContainer">
          <img className="LogoFooter" src={logo} alt="logo" />
        </div>
        <div className="RightContainer">
          <div className="Services">
            <span className="LabelContact">{ section1Title }</span>
            <span className="Body" dangerouslySetInnerHTML={{__html: this.converter.makeHtml(section1Content)}} />
          </div>
          <div className="ServicesAddress">
          <span className="LabelContact">{ section2Title }</span>
            <span className="BodyContact" dangerouslySetInnerHTML={{__html: this.converter.makeHtml(section2Content)}} />
          </div>
          <div className="ServicesContact">
            <span className="LabelContact">{ section3Title }</span>
            <span className="BodyContact" dangerouslySetInnerHTML={{__html: this.converter.makeHtml(section3Content)}} />
          </div>
          <div className="ServicesSocial">
            <span className="LabelContact">{ section4Title }</span>
            <span className="BodyContact">
              { socialMediaAccounts.networks.map(( network ) => {
                return <Fragment>
                  <a className="SocialLink" href={network.url}>{network.title}</a><br />
                </Fragment>
              })}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
