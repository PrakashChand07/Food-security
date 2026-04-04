// src/Components/Countdown.jsx
import React, { useState, useEffect } from 'react';

const Countdown = ({ targetDate = '2026-09-15T00:00:00' }) => {
  const [timeLeft, setTimeLeft] = useState({});
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const getTimeLeft = () => {
      const now = new Date();
      const endTime = new Date(targetDate);
      const difference = endTime - now;

      if (difference <= 0) {
        setExpired(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(getTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]); // ✅ safe dependency

  return (
    <div id="countdown" className="countdown-inner d-flex w-100">
      {expired ? (
        <div className="m-auto text-center py-4">
          <h2 className="fw-bold text-danger">Countdown Ended!</h2>
        </div>
      ) : (
        <>
          <div className="time m-auto py-4">
            <span className="lh-1 h1 fw-bold">{timeLeft.days}</span><br />
            <p className="text-secondary text-uppercase fw-semibold mb-0">Days</p>
          </div>

          <div className="time m-auto py-4">
            <span className="lh-1 h1 fw-bold">{timeLeft.hours}</span><br />
            <p className="text-secondary text-uppercase fw-semibold mb-0">Hours</p>
          </div>

          <div className="time m-auto py-4">
            <span className="lh-1 h1 fw-bold">{timeLeft.minutes}</span><br />
            <p className="text-secondary text-uppercase fw-semibold mb-0">Minutes</p>
          </div>

          <div className="time m-auto py-4">
            <span className="lh-1 h1 fw-bold">{timeLeft.seconds}</span><br />
            <p className="text-secondary text-uppercase fw-semibold mb-0">Seconds</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Countdown;
