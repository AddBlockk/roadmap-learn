import React from "react";
import { Link } from "react-router-dom";
import ButtonChangeTheme from "./ButtonChangeTheme";
export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src="/logo.svg" alt="logo" />
        </Link>
      </div>
      <nav className="nav__list">
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
          <li>
            <Link to="/calculator" className="nav__list-item">
              Калькулятор
            </Link>
          </li>
        </ul>
      </nav>
      <div className="button__change-theme">
        <ButtonChangeTheme />
      </div>
    </div>
  );
}
