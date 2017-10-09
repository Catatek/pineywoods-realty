import React, { Component } from 'react';
import './Footer.css';

import bull from '../../assets/bull.jpg';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="contact">
          <span>100 N Tampa St #2305</span>
          <span>Tampa, FL 33602</span>
          <div className="icon">
            <a href="tel:000-000-0000">
              <i className="fa fa-phone-square fa-2x devContact" aria-hidden="true" />
            </a>
            <span>000-000-0000</span>
          </div>
          <div className="icon">
            <a href="email: email@email.com">
              <i className="fa fa-envelope fa-2x devContact" aria-hidden="true" />
            </a>
            <span>email@email.com</span>
          </div>
        </div>
        <div className="footerLogo">
          <img src={bull} alt="Bull Logo" />
          <p>
            Nisi mollit amet duis excepteur est consectetur in enim eu est.Nisi pariatur ullamco incididunt voluptate
          </p>
        </div>

        <div className="social">
          <i className="fa fa-facebook-square fa-3x" aria-hidden="true" />
          <i className="fa fa-instagram fa-3x" aria-hidden="true" />
          <i className="fa fa-twitter-square fa-3x" aria-hidden="true" />
        </div>
      </div>
    );
  }
}

export default Footer;
