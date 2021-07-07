import React, { useState, useEffect } from 'react';
import NavBar from './components/nav-bar';
import Home from './components/homepage';
import './App.css';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Home />
    </div>
  );
}

export default App;
