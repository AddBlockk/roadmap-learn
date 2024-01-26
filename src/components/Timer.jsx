import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import work from "../sounds/work-sound.mp3";
import rest from "../sounds/rest-sound.mp3";
import reset from "../sounds/reset-sound.mp3";
import pause from "../sounds/pause-sound.mp3";
import styled from "styled-components";

const TodoStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  .timer {
    font-size: 64px;
  }
  button {
    color: white;
    padding: 12px 20px;
    border-radius: 20px;
    font-size: 20px;
    border: none;
    background-color: lightseagreen;
    cursor: pointer;
  }
  button:disabled {
    cursor: not-allowed;
  }
  .buttons__timer {
    display: flex;
    column-gap: 10px;
  }
  .button__reset {
    background-color: #e41212;
  }
  .button__pause {
    background-color: #e4bd12;
  }
`;

const Timer = () => {
  const [isActive, setIsActive] = useState(
    localStorage.getItem("isActive") === "true" ? true : false
  );
  const [isRestTime, setIsRestTime] = useState(
    localStorage.getItem("isRestTime") === "true" ? true : false
  );
  const [isPauseTime, setIsPauseTime] = useState(false);
  const [time, setTime] = useState(
    localStorage.getItem("time") ? parseInt(localStorage.getItem("time")) : 2400
  );
  const restTime = 300;
  const workTime = 2400;
  const [playWorkTime] = useSound(work);
  const [playRestTime] = useSound(rest);
  const [playResetTime] = useSound(reset);
  const [playPauseTime] = useSound(pause);
  const [isWorkSoundPlaying, setIsWorkSoundPlaying] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            setIsRestTime((prevIsRestTime) => !prevIsRestTime);
            if (isWorkSoundPlaying) {
              playRestTime();
              setIsWorkSoundPlaying(false);
              return restTime;
            } else {
              playWorkTime();
              setIsWorkSoundPlaying(true);
              return workTime;
            }
          } else {
            return prevTime - 1;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [
    isActive,
    isWorkSoundPlaying,
    playWorkTime,
    playRestTime,
    restTime,
    time,
  ]);

  useEffect(() => {
    localStorage.setItem("isActive", isActive);
    localStorage.setItem("isRestTime", isRestTime);
    localStorage.setItem("isPauseTime", isPauseTime);
    localStorage.setItem("time", time);
  }, [isActive, isRestTime, time, isPauseTime]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsActive(true);
    playWorkTime();
  };

  const handleReset = () => {
    setIsActive(false);
    setIsRestTime(false);
    setTime(2400);
    playResetTime();
    setIsPauseTime(false);
  };

  const handlePause = () => {
    setIsActive(false);
    setIsRestTime(false);
    playPauseTime();
    setIsPauseTime(true);
  };

  return (
    <TodoStyle>
      <h1>Задачки</h1>
      <h2>Стадия: {isRestTime ? "Отдых" : "Работа"}</h2>
      <h1 className="timer">{formatTime()}</h1>
      <div className="buttons__timer">
        {isActive ? (
          <button onClick={handlePause} className="button__pause">
            Пауза
          </button>
        ) : (
          ""
        )}
        {isActive ? "" : <button onClick={handleStart}>Старт</button>}
        {isActive || isRestTime || isPauseTime === true ? (
          <button onClick={handleReset} className="button__reset">
            Сброс
          </button>
        ) : (
          <button onClick={handleReset} disabled className="button__reset">
            Сброс
          </button>
        )}
      </div>
    </TodoStyle>
  );
};

export default Timer;
