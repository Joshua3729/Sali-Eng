import React from 'react'
import './Footer.css';
import Logo from '../UI/Logo/Logo';
const Footer = () => {
  return (
    <div className="Footer">
      <div className="innerDiv">
        <div className="flexDisplay">
          <div className="gridList">
            <div>
              <Logo />
              <div className='logoMessage'>Specialist in Retail Display for over 43 years </div>
            </div>
            <div>company</div>
            <div>location</div>
            <div>contact us</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;