import styled from "styled-components";
import ChangeTitle from "../components/ButtonСhangeTitle";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <HeaderContainer>
      <h1>Всех приветствую на этом сайте!</h1>
      <p>Здесь вы сможете ознакомиться с моими мини проектами в большей мере</p>
      <ChangeTitle />
    </HeaderContainer>
  );
}
