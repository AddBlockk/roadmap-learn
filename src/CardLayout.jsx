import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const CardTitle = styled.div`
  .container__cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    a {
      font-size: 20px;
      font-weight: 600;
      border-radius: 50px;
      padding: 10px;
      transition: 200ms ease-in-out;
    }
  }
`;

export default function CardLayout() {
  return (
    <CardTitle>
      <div className="container__cards">
        <Link to="/cards/1" id="1">
          Тоня
        </Link>
        <Link to="/cards/2" id="2">
          Я
        </Link>
        <Link to="/cards/new">Новая карточка</Link>
      </div>
      <Outlet />
    </CardTitle>
  );
}
