import React, { Component } from 'react';
import './About.css';
import closing from '../../assets/closing.jpg';

class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="hello">
          <h2>Hello Everyone!</h2>
          <p>
            Laborum deserunt sit Lorem consequat anim anim consequat do mollit
            aute quis qui duis commodo proident anim ullamco. Reprehenderit
            commodo exercitation nisi cillum tempor eu consectetur exercitation
            occaecat magna irure ex ullamco culpa sunt. Voluptate sunt nulla
            dolor irure aliquip labore fugiat labore sint et nostrud.
          </p>
          <p>
            Laborum deserunt sit Lorem consequat anim anim consequat do mollit
            aute quis qui duis commodo proident anim ullamco. Reprehenderit
            commodo exercitation nisi cillum tempor eu consectetur exercitation
            occaecat magna irure ex ullamco culpa sunt. Voluptate sunt nulla
            dolor irure aliquip labore fugiat labore sint et nostrud.
          </p>
        </div>
        <div class="aboutImage">
          {/* <a href="#">About Us</a> */}
          <img src={closing} />
        </div>
      </div>
    );
  }
}

export default About;
