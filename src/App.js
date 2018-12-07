import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleWebComponent from "./webComponent_simple";
import XCounter from "./xCounter";
import SimpleButton from "./webComponentBtn";

class App extends Component {
  render() {
    const text ="From APP -----------"
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

        </header> */}
        <simple-web-component content={text}></simple-web-component>
        <x-counter></x-counter>
        <br></br>
        <simple-button textToDisplay={"I am Form App------"}></simple-button>

      </div>
    );
  }
}

export default App;
