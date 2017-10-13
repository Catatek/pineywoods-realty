import React, { Component } from 'react';
import './Houses.css';

import listing from '../../../assets/listing.jpg';

class Houses extends Component {
  render() {
    return (
      <div className="Houses">
        <div className="item">
          <img src={listing} alt="" />
          <span>1000 10th Ave North</span>
        </div>
      </div>
    );
  }
}

export default Houses;
