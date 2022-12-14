import React from 'react'
import './Footer.css';
import Logo from '../UI/Logo/Logo';
import facebook from '../../Assets/social-media/facebook.png';
import linkedIn from "../../Assets/social-media/linkedin.png";
import instagram from "../../Assets/social-media/instagram.png";
import twitter from "../../Assets/social-media/twitter.png";
import whatsapp from "../../Assets/social-media/whatsapp.png";
import location from '../../Assets/Images/location.png'
import phoneCall from "../../Assets/Images/call.png";
import messageUs from "../../Assets/Images/message.png";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="innerDiv">
        <div className="flexDisplay">
          <div className="gridList">
            <div className="first-row">
              <div>
                <div className="logo">
                  <Logo />
                </div>

                <div className="logoMessage">
                  Specialist in Retail Display for over 43 years
                </div>
                <div className="social-media">
                  <a>
                    <img
                      src={facebook}
                      className="social-media-icons"
                      alt="facebook link"
                    />
                  </a>
                  <a>
                    <img
                      src={linkedIn}
                      className="social-media-icons"
                      alt="facebook link"
                    />
                  </a>
                  <a>
                    <img
                      src={instagram}
                      className="social-media-icons"
                      alt="instagram link"
                    />
                  </a>
                  <a>
                    <img
                      src={twitter}
                      className="social-media-icons"
                      alt="twitter link"
                    />
                  </a>
                  <a>
                    <img
                      src={whatsapp}
                      className="social-media-icons"
                      alt="whatsapp link"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="subject-line">location</div>
              <div className="location">
                <div className="icons">
                  <img src={location} className="icons-footer" />
                </div>

                <div>23 mandela unibell.</div>
              </div>
            </div>
            <div>
              <div className="subject-line">contact us</div>
              <div className="contact-us">
                <div className="icons">
                  <img src={phoneCall} className="icons-footer" />
                </div>

                <div>(+27) 71 234 5679</div>
              </div>
              <div className="contact-us">
                <div className="icons">
                  <img src={messageUs} className="icons-footer" />
                </div>

                <div>(+27) 71 234 5679</div>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <h1 className="rights">
            ©Copyrights 2021 All rights reserved, Designed by Sali Eng Retail
            Solutions.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;