import { useParams } from "react-router-dom";
import { people } from "../data";
function Card() {
  const { id } = useParams();
  const person = people.find((person) => person.id === parseInt(id));
  if (!person) {
    return <h1>Человек с id {id} не найден</h1>;
  }
  return (
    <>
      <div key={person.id} className="container__info_person">
        <img src={person.photo} alt={person.name} className="logo__person" />
        <div>
          <h2>{person.name}</h2>
          <p>{person.description}</p>
        </div>
      </div>
    </>
  );
}
export default Card;
