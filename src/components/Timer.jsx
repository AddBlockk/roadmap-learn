import React, { useState, useEffect } from "react";
import useSound from "use-sound";
import work from "../sounds/work-sound.mp3";
import rest from "../sounds/rest-sound.mp3";
const Timer = () => {
  const [isActive, setIsActive] = useState(false);
  const [isRestTime, setIsRestTime] = useState(false);
  const [time, setTime] = useState(2400);
  const restTime = 300;
  const workTime = 2400;
  const [playWorkTime] = useSound(work);
  const [playRestTime] = useSound(rest);
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
  };

  return (
    <div>
      <div>{isRestTime ? "Отдых" : "Работа"}</div>
      <div>{formatTime()}</div>
      {isActive ? "" : <button onClick={handleStart}>Старт</button>}
      <button onClick={handleReset}>Сброс</button>
    </div>
  );
};

export default Timer;
