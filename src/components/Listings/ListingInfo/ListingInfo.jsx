import React, { Component } from 'react';
import './ListingInfo.css';

import business from '../../../assets/business.jpg';

class ListingInfo extends Component {
  render() {
    return (
      <div className="ListingInfo">
        <img src={business} alt="" />
        <p>
          We will guide you through the home buying and selling process with our
          unparalleled expertise, guidance, and hands-on approach Our drive and
          desire to give every client a positive experience help us to focus on
          the tasks and complexities of real estate transactions. We possess
          over 60+ years of living, enjoying and working in the Tampa Bay area
          and are ready to help you Dream Big with your real estate needs. Call
          today and find out how The Real E'spire Team can help you!
        </p>
      </div>
    );
  }
}

export default ListingInfo;
