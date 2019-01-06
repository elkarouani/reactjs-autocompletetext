import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HideableText from './HideableText';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome To React
          </p>
        </header>
        <div className="App-content">
          <HideableText text="Dynamic Text!" />
        </div>
      </div>
    );
  }
}

export default App;
