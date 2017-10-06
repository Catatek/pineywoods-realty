import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Splash from '../Splash/Splash';
import Nav from '../Nav/Nav';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Splash />
          <Nav />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
