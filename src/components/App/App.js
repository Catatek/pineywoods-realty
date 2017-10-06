import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Splash from '../Splash/Splash';
import Nav from '../Nav/Nav';
import About from '../About/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Splash />
          <Nav />
          <About />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
