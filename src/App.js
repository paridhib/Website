import React, { Component } from 'react';
import Footer from "./components/Footer/Footer";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Footer></Footer>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            welcome save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
