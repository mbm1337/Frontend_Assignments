import React, { useState,useEffect } from "react";


const Timer = () => {

    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

    const startTimer = () => {
        if (!isPaused) {
            setTime(minutes * 60 + seconds);
        } else {
            setTime(time);
        }


    }

    const pauseTimer = () => {
        setIsPaused(true);
        setTimerOn(false);
        setTime(time);
    }

    const resetTimer = () => {
        setMinutes(0);
        setSeconds(0);
        setTimerOn(false);
        setTime(0);
    }

    const formatTime = (time) => {
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    }

    useEffect(() => {
        if (time === 0) {
            setTimerOn(false);
        }

        if (timerOn && time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        }
    }
    , [time, timerOn]);


    

return (
    <div>
        <h1>Timer</h1>
      <div>

        <input
          type="number"
          placeholder="Minutes"
          value={minutes}
          onChange={(e) => setMinutes(parseInt(e.target.value))}
        />
        <input
          type="number"
          placeholder="Seconds"
          value={seconds}
          onChange={(e) => setSeconds(parseInt(e.target.value))}
        />
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
      <div>Time Remaining: {formatTime(time)}</div>
    </div>
  );
}

export default Timer;