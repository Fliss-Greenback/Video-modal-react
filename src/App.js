import React from 'react';
import logo from './logo.svg';
import './App.css';

import  Model  from './component/videoModal'

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This would be an Onclick attached to one of the pictures on the homescreen for example.
          The onclick would open up 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Model/>
      </header>
    </div>
  );
}

export default App;
