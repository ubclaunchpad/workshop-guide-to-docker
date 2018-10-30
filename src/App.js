import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="App-launchpad">
            Workshop: A Developer's Guide to Docker
          </h2>
          <br />
          <br />
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <h1 className="App-launchpad">UBC LAUNCH PAD</h1>
          <h3 className="App-launchpad">SOFTWARE ENGINEERING TEAM</h3>
          <br />
          <p>
            Repository:&nbsp;
            <code>
              <a href="https://github.com/ubclaunchpad/workshop-guide-to-docker" target="_blank" rel="noopener noreferrer">
              ubclaunchpad/workshop-guide-to-docker
              </a>
            </code>
          </p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
