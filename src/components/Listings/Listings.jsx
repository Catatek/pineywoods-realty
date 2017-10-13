import React, { Component } from 'react';
import './Listings.css';

import home from '../../assets/home.jpg';
import Footer from '../Footer/Footer';

class Listings extends Component {
  render() {
    return (
      <div className="Listings">
        <div className="ListingSplash">
          <span>Listings</span>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Listings;
