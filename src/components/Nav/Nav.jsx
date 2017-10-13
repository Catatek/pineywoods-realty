import React, { Component } from 'react';
import { Route, Switch, Index, Link } from 'react-router-dom';

import './Nav.css';

import realty from '../../assets/realty.png';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <Link to="/">
          <img src={realty} alt="" />
        </Link>
        <nav>
          <Link to="/listings">Listings</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    );
  }
}

export default Nav;
