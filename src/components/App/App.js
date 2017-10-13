import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Index from '../Index/Index';
import Listings from '../Listings/Listings';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Index} />
          <Route path="/listings" component={Listings} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
