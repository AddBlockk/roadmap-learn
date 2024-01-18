import styled from "styled-components";
import ChangeTitle from "../components/ButtonСhangeTitle";
import Weather from "../components/Weather";
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2;
`;

export default function Home() {
  return (
    <MainContainer>
      <div>
        <h1>Всех приветствую на этом сайте!</h1>
        <p>
          Здесь вы сможете ознакомиться с моими мини проектами в большей мере
        </p>
        <ChangeTitle />
        <Weather />
      </div>
    </MainContainer>
  );
}
