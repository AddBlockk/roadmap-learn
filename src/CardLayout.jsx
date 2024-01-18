import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { people } from "./data";

const CardTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 2;
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

export default function CardLayout(name) {
  return (
    <CardTitle>
      <h1>Карточки</h1>
      <div className="container__cards">
        {people.map((person) => (
          <Link to={`/cards/${person.id}`} key={person.id}>
            {person.name}
          </Link>
        ))}
        <Link to="/cards/new">Новая карточка</Link>
      </div>
      <Outlet />
    </CardTitle>
  );
}
