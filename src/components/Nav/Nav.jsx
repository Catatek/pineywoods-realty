import React, { Component } from 'react';
import { Route, Switch, Index, Link } from 'react-router-dom';

import './Nav.css';

import reality from '../../assets/reality.jpg';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <img src={reality} alt="" />
        <nav>
          <Link to="#">Listings</Link>
          <Link to="#">About</Link>
          <Link to="#">Contact</Link>
        </nav>
      </div>
    );
  }
}

export default Nav;
