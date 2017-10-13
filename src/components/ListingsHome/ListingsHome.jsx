import React, { Component } from 'react';
import './ListingsHome.css';

class ListingsHome extends Component {
  render() {
    return (
      <div className="body">
        <div className="listingsHome">
          <h2>Featured Listings</h2>
        </div>
        <div className="featuredListings">
          <div className="box" />
          <div className="box" />
          <div className="box" />
        </div>
        <div className="featuredListingsButton">
          <button type="submit" onClick="window.location.href='{About}'">
            View All
          </button>
        </div>
      </div>
    );
  }
}

export default ListingsHome;
