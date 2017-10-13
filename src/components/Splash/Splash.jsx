import React, { Component } from 'react';
import bull from '../../assets/bull.png';
import styles from './Splash.css';

class Splash extends Component {
  render() {
    return (
      <div className="Splash">
        <img src={bull} alt="Bull Logo" />
        <div>
          <a href="#">Buy a Home</a>
          <a href="#">Sell a Home</a>
        </div>
      </div>
    );
  }
}

export default Splash;
