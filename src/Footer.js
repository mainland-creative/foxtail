import React, { Component } from 'react'
import logo from './Foxtail_Logo_Black.svg'

import './Footer.css'

class Footer extends Component {
  render () {
    return (
      <div className="Footer">
        <div className="LeftContainer">
          <img className="LogoFooter" src={logo} alt="logo" />
        </div>
        <div className="RightContainer">
          <div className="Services">
            <span className="LabelContact">Services</span>
            <span className="Body">
              Fresh and Local / Custom Menus /
              Event Planning / Decorating / Corporate Events /  Private Events /
              Creative Collaboration.
            </span>
          </div>
          <div className="ServicesAddress">
          <span className="LabelContact">Address</span>
            <span className="BodyContact">
              2565 3rd St #311, 
              San Francisco, California 94107
            </span>
          </div>
          <div className="ServicesContact">
            <span className="LabelContact">Contact</span>
            <span className="BodyContact">
              +1 415-282-2600
              Hello@foxtrailcatering.com
            </span>
          </div>
          <div className="ServicesSocial">
            <span className="LabelContact">Social</span>
            <span className="BodyContact">
              <a className="SocialLink" href="https://www.facebook.com/FoxtailCatering/">Facebook<br /></a>
              <a className="SocialLink" href="https://www.instagram.com/foxtailcatering/">Instagram<br /></a>
              <a className="SocialLink" href="https://www.pinterest.com/fxtailcatering/">Pinterest<br /></a>
              <a className="SocialLink" href="https://twitter.com/foxtailcatering">Twitter<br /></a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
