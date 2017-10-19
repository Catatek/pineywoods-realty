import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './Index.css';

import Splash from '../Splash/Splash';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import ListingsHome from '../ListingsHome/ListingsHome';
import Houses from '../Listings/Houses/Houses';
import MortgageApproval from '../MortgageApproval/MortgageApproval';

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <Splash />
        <Nav />
        <About />
        <MortgageApproval />
        <ListingsHome />
        <Contact />
        <Houses />
        <Footer />
      </div>
    );
  }
}

export default Index;
