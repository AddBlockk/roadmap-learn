import { Link, Outlet } from "react-router-dom";

export default function CardLayout() {
  return (
    <div>
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
    </div>
  );
}
