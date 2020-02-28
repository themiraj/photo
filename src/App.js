import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Compenents/cards'
import Navigation from './Compenents/Navbar'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Card/>
    </div>
  );
}

export default App;
