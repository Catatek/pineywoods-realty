import React, { Component } from 'react';
import './ListingInfo.css';

import business from '../../../assets/business.jpg';

class ListingInfo extends Component {
  render() {
    return (
      <div className="ListingInfo">
        <img src={business} alt="" />
        <p>
          Et consequat mollit tempor consectetur ad esse pariatur dolor et consequat fugiat. Anim non pariatur amet
          irure incididunt magna veniam occaecat tempor duis. Occaecat amet non duis Lorem cupidatat magna eiusmod. In
          voluptate esse sit excepteur ad cillum ad quis pariatur cupidatat ipsum eu ullamco aliqua culpa nulla. Irure
          culpa aute anim voluptate cupidatat cillum aliquip velit ea commodo.
        </p>
      </div>
    );
  }
}

export default ListingInfo;
