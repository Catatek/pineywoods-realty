import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Index from '../Index/Index';
import Listings from '../Listings/Listings';
import AboutPage from '../AboutPage/AboutPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Index} />
          <Route path="/listings" component={Listings} />
          <Route path="/about" component={AboutPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
