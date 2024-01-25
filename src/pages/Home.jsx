import styled from "styled-components";
import ChangeTitle from "../components/ButtonsChange/ButtonСhangeTitle";
import Weather from "../components/Weather";
import Todo from "../components/Todos/Todo";

const HomeStyled = styled.div``;

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
        <Todo />
      </div>
    </HomeStyled>
  );
}
