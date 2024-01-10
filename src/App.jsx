import "./App.scss";

import { Link, Route, Routes } from "react-router-dom";
import CardList from "./pages/CardList";
import Home from "./pages/Home";
import Card from "./pages/Card";
import NewCard from "./pages/NewCard";
import { NotFound } from "./pages/NotFound";
import CardLayout from "./CardLayout";
import ButtonChangeTheme from "./components/ButtonChangeTheme";
export default function App() {
  return (
    <div className="container">
      <ButtonChangeTheme />
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav__list-item">
              Главная
            </Link>
          </li>
          <li>
            <Link to="/cards" className="nav__list-item">
              Карточки
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<CardLayout />}>
          <Route index element={<CardList />} />
          <Route path="/cards/:id" element={<Card />} />
          <Route path="/cards/new" element={<NewCard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
