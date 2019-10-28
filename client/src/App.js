import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Moodmerica!</h2>
        </div>
        <p className="App-intro">
          This app will:
        </p>
        <ul>
          <li>Read tweets via twitter's stream API</li>
          <li>Run them through a sentiment analyzer</li>
          <li>Tag them with emotions</li>
          <li>Render them on a map of the USA</li>
          <li>Calculate / display an overall mood score</li>
          <li>Allow users to dirill down & filter by state and/or hashtag</li>
        </ul>
      </div>
    );
  }
}

export default App;
