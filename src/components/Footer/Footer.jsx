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
          {/* <div className="icon">
            <a href="tel:000-000-0000">
              <i
                className="fa fa-phone fa-2x devContact"
                aria-hidden="true"
              />
            </a>
            <span>000-000-0000</span>
          </div> */}
        </div>
        <div className="footerLogo">
          <img src={bull} alt="Bull Logo" />
          <p>

          </p>
        </div>

        <div className="social">
          <a href="https://www.facebook.com/mytamparealtors" target="_blank"><i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
          <a href="https://www.instagram.com/therealespireteam/?hl=en" target="_blank"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
        </div>
      </div>
    );
  }
}

export default Footer;
