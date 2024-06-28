import React from 'react';
import testImage from '../../../public/onlinetest.png';
import Image from 'next/image';
import { Button } from '../ui/button';
import MyEditorComponent from '../Editor';

interface QuizInstructionsProps {
  name: string;
  instructions: string;
  duration: string;
  champScore: number;
  status: string;
  onStartQuiz: () => void;
}

const formatDuration = (duration: string): string => {
  const [hours, minutes] = duration.split(':');

  if (hours !== '00') {
    return `${hours} hours ${minutes} minutes`;
  } else {
    return `${minutes} minutes`;
  }
};

const QuizInstructions: React.FC<QuizInstructionsProps> = ({
  name,
  instructions,
  duration,
  champScore,
  status,
  onStartQuiz,
}) => {
  let message = '';
  let showButton = true;

  if (status === 'in_progress') {
    message = 'You have already submitted once and failed.';
    showButton = false;
  } else if (status === 'finish') {
    message = 'You have already submitted and succeeded.';
    showButton = false;
  }

  return (
    <div className="h-full flex justify-center flex-col space-y-4">
      <div className="flex items-center justify-center">
        <div className="md:w-2/4 flex flex-col justify-center space-y-4 md:space-y-8">
          <h1 className="max-md:text-lg text-2xl max-md:font-bold opacity-[0.6]">
            {name}
          </h1>
          {message && <div className="text-red-500">{message}</div>}
          <div className="pointer-events-none text-white">
            <MyEditorComponent content={instructions} />
          </div>
          {showButton && (
            <Button variant="start" onClick={onStartQuiz}>
              Get started now
            </Button>
          )}
        </div>
        <div className="w-1/4 hidden md:flex justify-center">
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
