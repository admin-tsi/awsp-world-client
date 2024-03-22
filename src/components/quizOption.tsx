import { Checkbox } from '@radix-ui/react-checkbox';
import React from 'react';

interface Props {
  option: any;
  optionIndex: any;
}

const QuizOption = ({ option, optionIndex }: Props) => {
  return (
    <div className="flex items-center space-x-10 w-full">
      <Checkbox id={`option_${optionIndex}`} />
      <label
        htmlFor={`option_${optionIndex}`}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {option}
      </label>
    </div>
  );
};

export default QuizOption;
