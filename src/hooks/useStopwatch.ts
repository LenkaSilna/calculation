import { useState, useEffect, useCallback } from 'react';

export const useStopwatch = (initiallyRunning = false) => {
  const [isRunning, setIsRunning] = useState(initiallyRunning);
  const [time, setTime] = useState(0);

  const start = useCallback(() => {
    setIsRunning(true);
  }, []);

  const stop = useCallback(() => {
    setIsRunning(false);
  }, []);

  const reset = useCallback(() => {
    setTime(0);
  }, []);

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning) {
      interval = window.setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning]);

  return {
    time,
    isRunning,
    start,
    stop,
    reset,
  };
};
