
import React, { useState } from 'react';
import './App.css';

function App() {
  const [stack, setStack] = useState([]);

  const handlePush = () => 
  {
  const newValue = parseInt(prompt("Enter a new value:"));
  setStack(prevStack => [...prevStack, newValue]);
  };

  const handlePop = () => {
    setStack(prevStack => {
      const newStack = new Array();
      for (let i = 0; i < prevStack.length - 1; i++) {
        newStack[i] = prevStack[i];
      }
      return newStack;
    });
  };

  return (
  
  <div>
    <h2 className='title'>Stack</h2>
    <div className='buttons'>
      <button className='button1' onClick={handlePush}>Push</button>
      <button className='button2' onClick={handlePop}>Pop</button>
    </div>
    <div>
      {stack.map((value, index) => (
        <div className='result' key={index}>{value}</div>

      ))}
    </div>
  </div>
  
  );
}

export default App;
