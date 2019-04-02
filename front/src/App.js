import React, { Component } from 'react';
// components
import Menu from './components/menu';
import Form from './components/form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="container">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
