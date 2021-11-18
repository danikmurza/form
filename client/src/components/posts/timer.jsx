import React, { useState, useRef, useEffect } from "react";


const Timer = ({date, time}) => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    const strTimestamp = date + " " + time; 
    const countdownDate = new Date(strTimestamp).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });


  return (
    <div className="timer">
      <span>{timerDays?timerDays:0}</span>
      <span> d</span>
      <span> : </span>
      <span>{timerHours?timerHours:0}</span>
      <span> h</span>
      <span> : </span>
      <span>{timerMinutes?timerMinutes:0}</span>
      <span> m</span>
    </div> 
  );
};

export default Timer;
