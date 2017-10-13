import React, { Component } from 'react';
import './AboutContent1.css';

import person from '../../../assets/businessPerson.jpg';

class AboutContent1 extends Component {
  render() {
    return (
      <div className="AboutContent1">
        <div className="hello">
          <h2>The Real E’Spire Team of Pineywoods Realty is Realtor®'s Lauren Rodriguez and Brian D. Frey.</h2>
          <p>
            Inspiring our customers to “Dream beyond the now…” drives us, as we work to help them live their dreams
            through home ownership. The highest level of service is what we promise, no matter your price point or time
            frame. Whether this is your first experience with buying or selling a home or your 100th, we provide every
            customer with the same high quality experience with total dedication and focus on YOU and YOUR needs!
          </p>
        </div>
        <div class="aboutImage">
          <img src={person} />
        </div>
      </div>
    );
  }
}

export default AboutContent1;
