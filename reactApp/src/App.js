import React from 'react';
import './App.css';
import Time from './components/Time';


function App() {
  return (
    <div className="App">
      Live datetime from django: <Time />
    </div>
  );
}

export default App;
