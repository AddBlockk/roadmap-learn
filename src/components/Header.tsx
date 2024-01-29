import React from "react";
import { Link } from "react-router-dom";
import ButtonChangeTheme from "./ButtonsChange/ButtonChangeTheme.tsx";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 999999;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  border-radius: 0 0 20px 20px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  .header-logo {
    flex: 1 1 0%;
  }
  nav {
    flex: 1 1 0%;
    display: flex;
    justify-content: center;
    ul {
      display: flex;
      column-gap: 30px;
    }
  }
  .nav__list {
    display: flex;
    justify-content: center;
    a {
      font-size: 20px;
      font-weight: 600;
      border-radius: 50px;
      padding: 10px;
      transition: 200ms ease-in-out;
    }
  }
  .button__change-theme {
    flex: 1 1 0%;
    display: flex;
    justify-content: end;
  }
  .nav__body {
    display: flex;
    padding: 0 20px;
    align-items: center;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <div className="nav__body">
        <div className="header-logo">
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
            <li>
              <Link to="/posts" className="nav__list-item">
                Посты
              </Link>
            </li>
          </ul>
        </nav>
        <div className="button__change-theme">
          <ButtonChangeTheme />
        </div>
      </div>
    </HeaderContainer>
  );
}
