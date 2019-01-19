import React, { Component } from 'react';
import Header from '../Components/Header';
import ToDoAdder from '../Components/ToDoAdder';
import List from '../Components/List';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <ToDoAdder/>
      <List />
       
      </div>
    );
  }
}

export default App;
