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
          <a href="#">Listings</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    );
  }
}

export default Nav;
