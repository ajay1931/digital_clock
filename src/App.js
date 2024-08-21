import './App.css';
import Clock from './Components/Clock/Clock';
import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [])


  return (
    <div className="App">
      <Clock time={time} />
    </div>
  );
}

export default App;
