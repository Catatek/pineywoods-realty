import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './FeaturedListings.css';

import listing from '../../../assets/listing.jpg';

class FeaturedListings extends Component {
  render() {
    return (
      <div className="FeaturedListings">
        <h2>Featured Listings</h2>
        <div className="featuedItems">
          <div className="item">
            <img src={listing} alt="" />
            <span>1000 10th Ave North</span>
          </div>
          <div className="item">
            <img src={listing} alt="" />
            <span>1000 10th Ave North</span>
          </div>
          <div className="item">
            <img src={listing} alt="" />
            <span>1000 10th Ave North</span>
          </div>
        </div>
        <Link to="/listings">View All</Link>
        <Link to="/contact">Contact US</Link>
      </div>
    );
  }
}

export default FeaturedListings;
