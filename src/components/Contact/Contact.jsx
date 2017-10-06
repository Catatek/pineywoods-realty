import React, { Component } from 'react';
import './Contact.css';
import closing from '../../assets/closing.jpg';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h2>Contact US</h2>
        <div className="contactInfo">
          <div className="info">
            <img src={closing} alt="" />
            <p>Adipisicing ut sint anim Lorem irure mollit enim officia qui ullamco labore commodo. Amet amet magna</p>
            <div className="icon">
              <a href="tel:727-709-2806">
                <i className="fa fa-phone-square fa-2x devContact" aria-hidden="true" />
              </a>
              <span>000-000-0000</span>
            </div>
            <div className="icon">
              <a href="tel:000-000-0000">
                <i className="fa fa-envelope fa-2x devContact" aria-hidden="true" />
              </a>
              <span>email@email.com</span>
            </div>
          </div>
          <form action="">
            <input type="text" placeholder="Name:" />
            <input type="email" placeholder="Email:" />
            <input type="tel" placeholder="Phone:" />
            <textarea type="textarea" placeholder="Message:" />
            <button method="subit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
