// src/App.js
import React from 'react';
import TextDisplay from './TextDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Text Display App</h1>
      </header>
      <main>
        <TextDisplay />
      </main>
    </div>
  );
}

export default App;
