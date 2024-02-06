import React from "react";
import styled from "styled-components";
import ChangeTitle from "../components/ButtonsChange/ButtonСhangeTitle";
import Weather from "../components/Weather";
import Todo from "../components/Todos/Todo";
import Timer from "../components/Timer";
import BookLibrary from "../components/BookLibrary/BookLibrary";

const HomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export default function Home() {
  return (
    <HomeStyled>
      <div>
        <h1>Всех приветствую на этом сайте!</h1>
        <p>
          Здесь вы сможете ознакомиться с моими мини проектами в большей мере
        </p>
        <ChangeTitle />
        <Weather />
        <Timer />
        <BookLibrary />
        <Todo />
      </div>
    </HomeStyled>
  );
}
