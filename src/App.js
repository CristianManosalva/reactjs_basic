import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navegation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation title="Holi Papa" />
        <Navigation title="Holi Mama" />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
