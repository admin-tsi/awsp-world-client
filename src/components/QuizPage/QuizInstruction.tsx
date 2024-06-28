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
  quizzReviewDate?: string;
}

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
  };
  const formattedDate = date.toLocaleDateString('en-GB', options);
  const formattedTime = date.toLocaleTimeString('en-GB', timeOptions);
  return `${formattedDate} from ${formattedTime}`;
};

const QuizInstructions: React.FC<QuizInstructionsProps> = ({
  name,
  instructions,
  duration,
  champScore,
  status,
  quizzReviewDate,
  onStartQuiz,
}) => {
  let message = '';
  let showButton = false;

  if (status === 'in_progress') {
    message = `You have already submitted once and failed. Come back on ${
      quizzReviewDate ? formatDate(quizzReviewDate) : 'the review date'
    } to try again.`;
    if (quizzReviewDate) {
      const now = new Date();
      const reviewDate = new Date(quizzReviewDate);
      if (now >= reviewDate) {
        showButton = true;
      }
    }
  } else if (status === 'finish') {
    message = 'You have already submitted and succeeded.';
  } else if (status === 'not_started') {
    showButton = true;
  }

  return (
    <div className="h-full flex justify-center flex-col space-y-4">
      <div className="flex items-center justify-center">
        <div className="md:w-2/4 md:pl-24 flex flex-col justify-center space-y-4 md:space-y-8">
          <h1 className="max-md:text-lg text-2xl max-md:font-bold opacity-[0.6]">
            {name}
          </h1>
          {status === 'not_started' ? (
            <div className="pointer-events-none text-white">
              <MyEditorComponent content={instructions} />
            </div>
          ) : (
            <div className="text-white-500 text-4xl">{message}</div>
          )}
          {showButton && (
            <Button variant="start" onClick={onStartQuiz}>
              Get started now
            </Button>
          )}
        </div>
        <div className="w-2/4 hidden md:flex justify-center">
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
