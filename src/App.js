import "./App.css";
import ChangeTitle from "./components/СhangeTitle";
import Counter from "./components/Counter";
import { useTheme } from "./hooks/use-theme";

export default function App() {
  const { theme, setTheme } = useTheme();

  const handleDarkThemeClick = () => {
    setTheme("dark");
  };
  const handleLightThemeClick = () => {
    setTheme("light");
  };
  return (
    <div className="app__container">
      <div>
        <button onClick={handleLightThemeClick} className="buttons-theme">
          Светлая
        </button>
        <button onClick={handleDarkThemeClick}>Тёмная</button>
        <p className="comment">
          \\ При нажатии на кнопки, будет меняться тема сайта
        </p>
      </div>
      <Counter />
      <ChangeTitle />
    </div>
  );
}
