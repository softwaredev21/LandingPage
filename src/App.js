import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Intro from './components/intro';

function App() {
  return (
    <div className="App">
      <Header>
        Hello
      </Header>
      <Intro></Intro>
    </div>
  );
}

export default App;
