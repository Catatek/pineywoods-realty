import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Index from '../Index/Index';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Index} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
