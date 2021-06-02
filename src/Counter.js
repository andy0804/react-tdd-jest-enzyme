import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  return (
    <div data-test="component-app">
      {error && (
        <span className={`danger`} data-test="error-message">
          Cannot decrement beyond 0
        </span>
      )}
      <h1 data-test="counter-display">
        The counter is currently <span data-test="count">{count}</span>
      </h1>
      <button
        onClick={() => {
          setCount((prevState) => prevState + 1);
          setError(false);
        }}
        data-test="increment-button"
      >
        Increment Button
      </button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
            setError(false);
          } else {
            setError(true);
          }
        }}
        data-test="decrement-button"
      >
        Decrement Button
      </button>
    </div>
  );
}
export default Counter;
