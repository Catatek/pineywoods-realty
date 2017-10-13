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
              Adipisicing ut sint anim Lorem irure mollit enim officia qui
              ullamco labore commodo. Amet amet magna
            </p>
            <div className="icon">
              <a href="tel:000-000-0000">
                <i
                  className="fa fa-phone-square fa-2x devContact"
                  aria-hidden="true"
                />
              </a>
              <span>000-000-0000</span>
            </div>
            <div className="icon">
              <a href="email:email@email.com">
                <i
                  className="fa fa-envelope fa-2x devContact"
                  aria-hidden="true"
                />
              </a>
              <span>email@email.com</span>
            </div>
          </div>
          <form onSubmit={formSubmit}>
            <input type="text" name="name" placeholder="Name:" />
            <input type="email" name="email" placeholder="Email:" />
            <input type="tel" name="phone" placeholder="Phone:" />
            <textarea type="textarea" name="message" placeholder="Message:" />
            <button method="subit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
