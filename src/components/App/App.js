import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Index from '../Index/Index';
import Listings from '../Listings/Listings';
import ContactPage from '../ContactPage/ContactPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Index} />
          <Route path="/listings" component={Listings} />
          <Route path="/contactPage" component={ContactPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
