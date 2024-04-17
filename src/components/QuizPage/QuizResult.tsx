import React from 'react';
import Image from 'next/image';
import successImage from '../../../public/winner.svg';
import failureImage from '../../../public/failure.svg';
import { QuizSubmissionResponse } from '@/types/quizInterfaces';

interface QuizResultProps {
  result: QuizSubmissionResponse | null;
}

const QuizResult: React.FC<QuizResultProps> = ({ result }) => {
  if (!result) {
    return null;
  }

  return (
    <div className="h-full flex flex-col justify-center items-center">
      {result.decision === 'PASS' ? (
        <Image src={successImage} alt="PASS" height={200} />
      ) : (
        <Image src={failureImage} alt="failure" height={200} />
      )}
      <div className="w-2/5 flex flex-col items-center justify-center space-y-4 mt-2">
        <span className="text-primary">
          {result.decision === 'PASS' ? 'Congratulations' : 'Oops!'}
        </span>
        {result.decision === 'FAIL' && (
          <p className="text-xl text-center">
            Unfortunately, you have failed this test with a score of{' '}
            {result.score}, the expected score being {result.quizzScore}. Better
            luck next time!
          </p>
        )}
        {result.decision === 'PASS' && (
          <p className="text-xl text-center">
            Congratulations, you have passed this test with a score of{' '}
            {result.score}, the expected score being {result.quizzScore}. Keep
            up the good work!
          </p>
        )}
      </div>
    </div>
  );
};

export default QuizResult;
