import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navegation';
import tasks from './tasks.json';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation title="Holi Papa" />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
