import React from "react";
import { useParams } from "react-router-dom";
import { people } from "../../data.ts";
import styled from "styled-components";

const CardBody = styled.div`
  user-select: none;
  .container__info_person {
    display: flex;
    column-gap: 20px;
    padding-top: 20px;
    margin: 0 auto;
    max-width: 900px;
    align-items: center;
    justify-content: space-between;

    .logo__person {
      width: 160px;
    }

    .body__person {
      display: flex;
      align-items: center;
      justify-content: space-between;
      column-gap: 20px;
    }
  }
`;

interface Person {
  id: number;
  photo: string;
  name: string;
  description: string;
}

function Card() {
  const { id } = useParams<{ id: string }>()!;
  const person = people.find((person: Person) => person.id === parseInt(id!));

  if (!person) {
    return <h1>Человек с id {id} не найден</h1>;
  }

  return (
    <CardBody>
      <div key={person.id} className="container__info_person">
        <div className="body__person">
          <img src={person.photo} alt={person.name} className="logo__person" />
          <div className="text__card">
            <h2>{person.name}</h2>
            <p>{person.description}</p>
          </div>
        </div>
      </div>
    </CardBody>
  );
}

export default Card;
