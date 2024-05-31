import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const colors = ['black', 'red', 'orange', 'yellow', 'green'];

  const handleClick = () => {
    setCount((prevCount) => (prevCount + 1) % 5);
  };

  return (
    <div>
      <h2 style={{ color: colors[count] }}>{count}</h2>
      <button onClick={handleClick}>Plus</button>
    </div>
  );
};

export default Counter;
