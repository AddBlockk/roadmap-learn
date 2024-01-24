import ChangeTitle from "../components/ButtonСhangeTitle";
import Weather from "../components/Weather";

export default function Home() {
  return (
    <>
      <div>
        <h1>Всех приветствую на этом сайте!</h1>
        <p>
          Здесь вы сможете ознакомиться с моими мини проектами в большей мере
        </p>
        <ChangeTitle />
        <Weather />
      </div>
    </>
  );
}
