import React, { Component } from 'react';
import Header from '../Components/Header';
import ToDoAdder from '../Components/ToDoAdder';
import List from '../Components/List';

import './App.css';
import CompletedItems from '../Components/CompletedItems';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <ToDoAdder/>
      <List />
      <CompletedItems/>
      
       
      </div>
    );
  }
}

export default App;
