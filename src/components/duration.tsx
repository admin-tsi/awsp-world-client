import React, { useEffect, useState } from 'react';

interface TimerProps {
  duration: number;
}

const Duration: React.FC<TimerProps> = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState<number>(duration);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft === 0) {
          clearInterval(interval);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [duration]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`;
  };

  return (
    <div className="bg-background rounded-md p-2 h-fit w-fit flex justify-center items-center">
      <span className="text-lg">Time Left: {formatTime(timeLeft)}</span>
    </div>
  );
};

export default Duration;
