import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div data-test="component-app">
      <h1 data-test="counter-display">
        The counter is currently <span data-test="count">{count}</span>
      </h1>
      <button
        onClick={() => setCount((prevState) => prevState + 1)}
        data-test="increment-button"
      >
        Increment Button
      </button>
    </div>
  );
}
export default Counter;
