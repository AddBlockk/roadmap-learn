import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Card from "./components/Cards/Card.tsx";
import NewCard from "./components/Cards/NewCard.tsx";
import { NotFound } from "./components/Cards/NotFound.tsx";
import CardLayout from "./pages/CardLayout.tsx";
import Header from "./components/Header.tsx";
import Calculator from "./pages/Calculator.tsx";
import Posts from "./pages/Posts.tsx";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cards" element={<CardLayout />}>
              <Route path="/cards/:id" element={<Card />} />
              <Route path="/cards/new" element={<NewCard />} />
            </Route>
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}
