import { useParams } from "react-router-dom";
import { people } from "../data";
import styled from "styled-components";

const CardBody = styled.div`
  .container__info_person {
    display: flex;
    gap: 20px;
    .logo__person {
      width: 40%;
      height: 40%;
    }
  }
`;

function Card() {
  const { id } = useParams();
  const person = people.find((person) => person.id === parseInt(id));
  if (!person) {
    return <h1>Человек с id {id} не найден</h1>;
  }
  return (
    <CardBody>
      <div key={person.id} className="container__info_person">
        <img src={person.photo} alt={person.name} className="logo__person" />
        <div>
          <h2>{person.name}</h2>
          <p>{person.description}</p>
        </div>
      </div>
    </CardBody>
  );
}
export default Card;
