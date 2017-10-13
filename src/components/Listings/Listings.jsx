import React, { Component } from 'react';
import './Listings.css';

import home from '../../assets/home.jpg';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import Houses from './Houses/Houses';
import ListingInfo from './ListingInfo/ListingInfo';
import ListingSplash from './ListingSplash/ListingSplash';

class Listings extends Component {
  render() {
    return (
      <div className="Listings">
        <ListingSplash />
        <Nav />
        <Houses />
        <ListingInfo />
        <Houses />
        <Footer />
      </div>
    );
  }
}

export default Listings;
