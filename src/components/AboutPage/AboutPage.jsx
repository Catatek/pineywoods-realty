import React, { Component } from 'react';
import './AboutPage.css';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import AboutSplash from './AboutSplash/AboutSplash';
import AboutContent1 from './AboutContent1/AboutContent1';
import AboutContent2 from './AboutContent2/AboutContent2';
import ListingsHome from '../ListingsHome/ListingsHome';
import ContactContainer from '../ContactContainer/ContactContainer';

class AboutPage extends Component {
  render() {
    return (
      <div className="AboutPage">
        <AboutSplash />
        <Nav />
        <AboutContent1 />
        <AboutContent2 />
        <ListingsHome />
        <ContactContainer />
        <Footer />
      </div>
    );
  }
}

export default AboutPage;
