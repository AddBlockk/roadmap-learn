import "./App.css";
import ChangeTitle from "./components/СhangeTitle";
import Counter from "./components/Counter";

export default function App() {
  return (
    <div className="container">
      <Counter />
      <ChangeTitle />
    </div>
  );
}
