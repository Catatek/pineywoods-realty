import React, { Component } from 'react';
import './AboutPage.css';

import Nav from '../Nav/Nav';
import AboutSplash from './AboutSplash/AboutSplash';
import AboutContent1 from './AboutContent1/AboutContent1';
import AboutContent2 from './AboutContent2/AboutContent2';
import FeaturedListings from './FeaturedListings/FeaturedListings';

class AboutPage extends Component {
  render() {
    return (
      <div className="AboutPage">
        <AboutSplash />
        <Nav />
        <AboutContent1 />
        <AboutContent2 />
        <FeaturedListings />
      </div>
    );
  }
}

export default AboutPage;