import "./App.scss";

import { Route, Routes } from "react-router-dom";
import CardList from "./pages/CardList";
import Home from "./pages/Home";
import Card from "./pages/Card";
import NewCard from "./pages/NewCard";
import { NotFound } from "./pages/NotFound";
import CardLayout from "./CardLayout";
import Header from "./components/Header";
import Calculator from "./pages/Calculator";
export default function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<CardLayout />}>
            <Route index element={<CardList />} />
            <Route path="/cards/:id" element={<Card />} />
            <Route path="/cards/new" element={<NewCard />} />
          </Route>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
