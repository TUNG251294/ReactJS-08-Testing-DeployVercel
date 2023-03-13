import React from 'react';
import './App.css'
 
const App = () => {
  const value = 'Learn React'
 
  return (
    <div className='App'>
      <h1>Default value</h1>
      <div className="default-value">{value}</div>
    </div>
  );
}
 
export default App;