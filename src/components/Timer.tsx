import React, { useState, useEffect, useMemo } from "react";
// import useSound from "use-sound";
import styled from "styled-components";
import { Howl } from "howler";

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

const Timer: React.FC = () => {
  const [isActive, setIsActive] = useState(
    localStorage.getItem("isActive") === "true"
  );
  const [isRestTime, setIsRestTime] = useState(
    localStorage.getItem("isRestTime") === "true"
  );
  const [isPauseTime, setIsPauseTime] = useState(false);
  const [time, setTime] = useState(
    localStorage.getItem("time")
      ? parseInt(localStorage.getItem("time")!)
      : 2400
  );
  const restTime = 300;
  const workTime = 2400;
  const playWorkTime = useMemo(
    () => new Howl({ src: "/sounds/work-sound.mp3" }),
    []
  );
  const playRestTime = useMemo(
    () => new Howl({ src: "/sounds/rest-sound.mp3" }),
    []
  );
  const playResetTime = useMemo(
    () => new Howl({ src: "/sounds/reset-sound.mp3" }),
    []
  );
  const playPauseTime = useMemo(
    () => new Howl({ src: "/sounds/pause-sound.mp3" }),
    []
  );
  const [isWorkSoundPlaying, setIsWorkSoundPlaying] = useState(true);

  useEffect(() => {
    let interval: any = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime === 0) {
            setIsRestTime((prevIsRestTime) => !prevIsRestTime);
            if (isWorkSoundPlaying) {
              playRestTime.play();
              setIsWorkSoundPlaying(false);
              return restTime;
            } else {
              playWorkTime.play();
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
    workTime,
  ]);

  useEffect(() => {
    localStorage.setItem("isActive", String(isActive));
    localStorage.setItem("isRestTime", String(isRestTime));
    localStorage.setItem("isPauseTime", String(isPauseTime));
    localStorage.setItem("time", String(time));
  }, [isActive, isRestTime, isPauseTime, time]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsActive(true);
    playWorkTime.play();
  };

  const handleReset = () => {
    setIsActive(false);
    setIsRestTime(false);
    setTime(2400);
    playResetTime.play();
    setIsPauseTime(false);
  };

  const handlePause = () => {
    setIsActive(false);
    setIsRestTime(false);
    playPauseTime.play();
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
        ) : null}
        {isActive ? null : <button onClick={handleStart}>Старт</button>}
        {(isActive || isRestTime || isPauseTime) === true ? (
          <button onClick={handleReset} className="button__reset">
            Сброс
          </button>
        ) : null}
      </div>
    </TodoStyle>
  );
};

export default Timer;
