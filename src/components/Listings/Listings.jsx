import React, { Component } from 'react';
import './Listings.css';

import home from '../../assets/home.jpg';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import Houses from './Houses/Houses';
import ListingInfo from './ListingInfo/ListingInfo';
import ListingSplash from './ListingSplash/ListingSplash';
import ContactContainer from '../ContactContainer/ContactContainer';
import About from '../About/About';

class Listings extends Component {
  render() {
    return (
      <div className="Listings">
        <ListingSplash />
        <Nav />
        <ListingInfo />
        <Houses />
        <ContactContainer />
        <Houses />
        <Footer />
      </div>
    );
  }
}

export default Listings;
