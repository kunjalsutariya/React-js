import React, { useState } from 'react';
import './Count.css'; 

function NewCount() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
   <div className='box'>
     <div className="count">
      <h1>Counter App</h1>
      <div className="Newcount">{count}</div>
      <div className="counter-controls">
        <button className="btn" onClick={increment}>+</button>
        <button className="btn" onClick={decrement}>-</button>
        <button className="btn" onClick={reset}>R</button>
      </div>
    </div>
   </div>
  );
}

export default NewCount;
