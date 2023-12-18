import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="container">
      <div className="container-calc">
        <button onClick={() => setCount(count * 0)} className="counter">
          Reset
        </button>
        <button onClick={handleClick} className="counter">
          +
        </button>
        <button className="counter">Значение: {count}</button>
        <button onClick={() => setCount(count - 1)} className="counter">
          -
        </button>
        <button onClick={() => setCount(count / 2)} className="counter">
          /
        </button>
        <button onClick={() => setCount(count * 2)} className="counter">
          *
        </button>
      </div>
    </div>
  );
}
