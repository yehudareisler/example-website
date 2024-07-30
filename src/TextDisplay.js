// src/TextDisplay.js
import React, { useState } from 'react';
import './App.css';

function TextDisplay() {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleButtonClick = () => {
    setDisplayText(inputText);
  };

  return (
    <div className="text-display-container">
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something..."
        rows={5} // Fixed number of rows for height
      />
      <button onClick={handleButtonClick}>Update Text</button>
      <p>{displayText}</p>
    </div>
  );
}

export default TextDisplay;
