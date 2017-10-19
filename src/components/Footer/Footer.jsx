import React, { Component } from 'react';
import './Footer.css';

import bull from '../../assets/bull.png';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="contact">
          <span>100 N Tampa St #2305</span>
          <span>Tampa, FL 33602</span>
          <br />
          <span>P: (813) 575-0110</span>
        </div>
        <div className="footerLogo">
          <img src={bull} alt="Bull Logo" />
          <h3>PineyWoods Realty</h3>
          <p>
            © 2017 MY FLORIDA REGIONAL MLS®. ALL RIGHTS RESERVED. INFORMATION
            DEEMED RELIABLE, BUT NOT GUARANTEED.
          </p>
        </div>

        <div className="social">
          <a href="https://www.facebook.com/mytamparealtors" target="_blank">
            <i className="fa fa-facebook-square fa-2x" aria-hidden="true" />
          </a>
          <a
            href="https://www.instagram.com/therealespireteam/?hl=en"
            target="_blank"
          >
            <i className="fa fa-instagram fa-2x" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
