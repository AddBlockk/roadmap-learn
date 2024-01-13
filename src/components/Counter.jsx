import { useState } from "react";
import styled from "styled-components";

const CalcBody = styled.div`
  .container-body {
    gap: 20px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .counter {
      border: 0px;
      border-radius: 10px;
      padding: 20px;
      background-color: lightseagreen;
      color: white;
      font-weight: 700;
      font-size: 20px;
      transition: 200ms ease-in-out;
      cursor: pointer;
    }
    .counter:hover {
      background-color: rgb(23, 143, 137);
    }
  }
`;

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <CalcBody>
      <div className="container-body">
        <button onClick={() => setCount(count * 0)} className="counter">
          Reset
        </button>
        <button onClick={handleClick} className="counter">
          +
        </button>
        <button className="counter count">Значение: {count}</button>
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
    </CalcBody>
  );
}
