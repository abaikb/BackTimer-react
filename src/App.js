import React, { useState, useEffect } from 'react';
import './App.css'

const CountdownTimer = () => {
  const endDate = new Date('05/13/2023 12:00 PM').getTime();
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = endDate - currentTime;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        clearInterval(intervalId);
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
       
      }
    }, 1000);
    // if (seconds < 10) {
    //   seconds = `0${seconds}`
    // }

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='bcg'>
      <h1>big sale on lifetime plan</h1>
      <h3>there is very little left</h3>
      <div className='time'>
      {timeRemaining.days !== 0 && (
        <div className='parent'>
          <div className='numbers'>{timeRemaining.days > 9 ? timeRemaining.days : `0${timeRemaining.days}`} <p>|</p></div>
          <div className='n-text'>days</div>
        </div>
      )}
      {timeRemaining.hours !== 0 && (
        <div className='parent'>
          <div className='numbers'>{timeRemaining.hours > 9 ? timeRemaining.hours : `0${timeRemaining.hours}`} <p>|</p></div>
          <div className='n-text'>hours</div>
        </div>
      )}
      {timeRemaining.minutes !== 0 && (
        <div className='parent'>
          <div className='numbers'>{timeRemaining.minutes > 9 ? timeRemaining.minutes : `0${timeRemaining.minutes}`} <p>|</p></div>
          <div className='n-text'>minutes</div>
        </div>
      )}
      {timeRemaining.seconds !== 0 && (
        <div className='parent'>
          <div className='numbers'>{timeRemaining.seconds > 9 ? timeRemaining.seconds : `0${timeRemaining.seconds}`} </div>
          <div className='n-text'>seconds</div>
        </div>
      )}

      </div>

     
    </div>
  );
};

export default CountdownTimer;