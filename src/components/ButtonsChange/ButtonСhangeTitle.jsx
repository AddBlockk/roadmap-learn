import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ButtonTitle = styled.div`
  display: flex;
  justify-content: center;
  .change__title {
    border: 0px;
    border-radius: 10px;
    padding: 20px;
    background-color: lightseagreen;
    color: white;
    font-weight: 700;
    font-size: 20px;
    transition: 200ms ease-in-out;
    cursor: pointer;
    margin: 20px 0;
  }
  .change__title:hover {
    background-color: rgb(23, 143, 137);
  }
`;

export default function ButtonChangeTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Название заголовка: ${count}`;
  }, [count]);

  return (
    <ButtonTitle>
      <button
        onClick={() => setCount((count) => count + 1)}
        className="change__title">
        Изменить Заголовок
      </button>
    </ButtonTitle>
  );
}
