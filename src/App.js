import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React AND DynamoDB Game Collection</h1>
        <form>
          <label >game title:</label>
          <input type="text" name="game title" />
        </form>
      </header>
    </div>
  );
}

export default App;
