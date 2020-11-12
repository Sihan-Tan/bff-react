import React, { FC, useEffect, useState } from "react";

const UseEffect: FC = () => {
  const initialCount: number = 10;
  const [count, setCount] = useState(initialCount);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    return () => {
      document.title = `reset title`;
    };
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
};

export default UseEffect;
