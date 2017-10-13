import React, { Component } from 'react';
import './ContactPage.css';

import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import ContactPageSplash from './ContactPageSplash/ContactPageSplash';

class ContactPage extends Component {
  render() {
    return (
      <div>
        <ContactPageSplash />
        <Nav />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default ContactPage;
