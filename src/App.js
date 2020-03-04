import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Compenents/Home'
import Navigation from './Compenents/Navbar'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
    </div>
  );
}

export default App;
