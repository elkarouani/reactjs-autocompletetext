import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AutoCompleteText from './AutoCompleteText';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome To React
          </p>
        </header><br/>
        <div className="App-component">
          <AutoCompleteText />
        </div>
      </div>
    );
  }
}

export default App;
