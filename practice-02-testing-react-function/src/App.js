import './App.css';

import React, { useState } from 'react';
 
const App = () => {
  const [counter, setcounter] = useState(0);
 
  return (
    <div className='App'>
      <h1>This is counter app</h1>
      <div className="counter-value">Count: {counter}</div>
      <button className="increment" onClick={() => setcounter(counter + 1)} style ={{marginRight: '10px'}}>
        Increment
      </button>
      <button className="decrement" onClick={() => setcounter(counter - 1)}>
        Decrement
      </button>
    </div>
  );
}
 
export default App;