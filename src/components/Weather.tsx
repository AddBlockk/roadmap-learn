import React, { useState, useEffect } from "react";

const URL = `https://api.openweathermap.org/data/2.5/weather?q=Astrakhan&units=metric&appid=e6444a7e4b0881480b4f9e3cc971b3e0`;

interface WeatherData {
  main: {
    temp: number;
  };
  wind: {
    speed: number;
  };
}

export default function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(URL);
        const data = await result.json();

        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Матушка природа в Астрахани</h1>
      {weatherData && (
        <div>
          <p>Погода в Астрахани: {Math.round(weatherData.main.temp)}°C</p>
          <p>Скорость ветра: {weatherData.wind.speed} м/c</p>
        </div>
      )}
      <p className="comment">
        {"/*Всё выполняется в прямом времени благодаря API*/"}
      </p>
    </div>
  );
}
