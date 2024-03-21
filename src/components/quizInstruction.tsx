import React from 'react';
import testImage from '../../public/onlinetest.png';
import Image from 'next/image';
import { Button } from './ui/button';

interface DurationProps {
  hours: number;
  minutes: number;
  seconds: number;
}

const formatDuration = (duration: DurationProps): string => {
  const { hours, minutes, seconds } = duration;

  if (hours > 0) {
    return `${hours} hours ${minutes} minutes`;
  } else if (minutes > 0) {
    return `${minutes} minutes`;
  } else {
    return `${seconds} seconds`;
  }
};

interface QuizInstructionsProps {
  name: string;
  instructions: string;
  duration: DurationProps;
  champScore: number;
}

const QuizInstructions: React.FC<QuizInstructionsProps> = ({
  name,
  instructions,
  duration,
  champScore,
}) => {
  return (
    <div className="h-full flex justify-center flex-col space-y-4">
      <div className="flex items-center justify-center">
        <div className="w-2/4 flex flex-col justify-center space-y-8">
          <h1>{name}</h1>
          <p className="text-lg">
            For this quiz, you will have to{' '}
            <strong className="text-primary">{instructions}</strong> in{' '}
            <strong className="text-primary">{formatDuration(duration)}</strong>
            . You must answer all questions, and each question has a score. Make
            sure to choose the{' '}
            <strong className="text-primary">correct answer</strong> for each
            question before you submit your answer. To pass this quiz, you need
            to get a total score of {champScore}. Good luck!
          </p>
          <Button variant="start">Get started now </Button>
        </div>
        <div className="w-1/4 flex justify-center">
          <Image
            src={testImage}
            alt="woman in test situation"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizInstructions;
