import { Link, Outlet } from "react-router-dom";

export default function CardLayout() {
  return (
    <>
      <Link to="/cards/1" id="1">
        Тоня
      </Link>
      <Link to="/cards/2" id="2">
        Я
      </Link>
      <Link to="/cards/new">Новая карточка</Link>
      <Outlet />
    </>
  );
}
