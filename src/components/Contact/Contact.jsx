import React, { Component } from 'react';
import './Contact.css';
import closing from '../../assets/business.jpg';

const formSubmit = e => {
  e.preventDefault();

  const name = e.target.elements.name.value;
  const email = e.target.elements.email.value;
  const phone = e.target.elements.phone.value;
  const message = e.target.elements.message.value;

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(message);
};

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h2>Contact Us</h2>
        <div className="contactInfo">
          <div class="closingImage">
            <img src={closing} alt="" />
          </div>
          <div className="info">
            <p>
              We'd love to hear from you and better understand your objectives
              when it comes to buying and selling your home. Please contact us
              either by phone or leave a message through our form. Thank you.
            </p>
            <div className="icon">
              <a href="tel:000-000-0000">
                <i class="fa fa-phone" aria-hidden="true" />
              </a>
              <span className="number"> (813) 575-0110</span>
            </div>
          </div>
          <form onSubmit={formSubmit}>
            <input type="text" name="name" placeholder="Name:" />
            <input type="email" name="email" placeholder="Email:" />
            <input type="tel" name="phone" placeholder="Phone:" />
            <input type="text" name="city" placeholder="City:" />
            <textarea type="textarea" name="message" placeholder="Message:" />
            <button method="subit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
