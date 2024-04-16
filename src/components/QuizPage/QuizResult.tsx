import React from 'react';
import Image from 'next/image';
import successImage from '../../../public/winner.svg';
import failureImage from '../../../public/failure.svg';

type Props = {
  resultType: 'success' | 'failure';
};

const QuizResult = (props: Props) => {
  const { resultType } = props;

  return (
    <div className="h-full flex flex-col justify-center items-center">
      {resultType === 'success' ? (
        <Image src={successImage} alt="success" height={200} />
      ) : (
        <Image src={failureImage} alt="failure" height={200} />
      )}
      <div className="w-2/5 flex flex-col items-center justify-center space-y-4 mt-2">
        <span className="text-primary">
          {resultType === 'success' ? 'Congratulations' : 'Oops!'}
        </span>
        <p className="text-xl text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Sint vitae eum aspernatur
          vero iure.
        </p>
      </div>
    </div>
  );
};

export default QuizResult;
