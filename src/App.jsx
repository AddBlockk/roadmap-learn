import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Card from "./components/Cards/Card";
import NewCard from "./components/Cards/NewCard";
import { NotFound } from "./components/Cards/NotFound";
import CardLayout from "./pages/CardLayout";
import Header from "./components/Header";
import Calculator from "./pages/Calculator";
import Posts from "./pages/Posts";

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
