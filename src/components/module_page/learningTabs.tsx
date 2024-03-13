import React from 'react';

type Props = {};

const LearningTabs = (props: Props) => {
  return (
    <div className="h-full px-2 pt-4">
      <div className="flex flex-col space-y-2">
        <span className="text-white font-bold text-4xl">My Learning</span>
        <span className="text-white text-1xl">
          The Adventure Awaits: Explore the Thrilling Realm of Comprehensive
          Sports Training Education.
        </span>
      </div>
    </div>
  );
};

export default LearningTabs;
