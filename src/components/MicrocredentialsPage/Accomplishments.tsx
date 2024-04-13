import React from 'react';
import LearningAccomplishments from './LearningAccomplishments';

type Props = {};

const Accomplishments = (props: Props) => {
  return (
    <div className="h-full px-2 pt-4 flex flex-col space-y-5">
      <div className="flex flex-col space-y-2">
        <span className="text-white font-bold text-4xl">Accomplishments</span>
        <span className="text-white text-1xl">
          Compare your performance, explore detailed insights, and share your
          success with the world. Play, learn, triumph!
        </span>
      </div>
      <div>
        <LearningAccomplishments />
      </div>
    </div>
  );
};

export default Accomplishments;
