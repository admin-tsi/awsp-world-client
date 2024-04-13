import React, { useEffect, useState } from 'react';

interface TimerProps {
  duration: string;
}

const Duration: React.FC<TimerProps> = ({ duration }) => {
  const initialDuration = parseInt(duration, 10);
  const [timeLeft, setTimeLeft] = useState<number>(initialDuration);

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
  }, [initialDuration]);

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-background rounded-md p-2 h-fit w-fit flex justify-center items-center">
      <span className="text-lg">Time Left: {formatTime(timeLeft)}</span>
    </div>
  );
};

export default Duration;
