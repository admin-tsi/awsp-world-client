import React from 'react';
import Card from './microcredentialsCard/card';

type Props = {};

const HomeTabs = (props: Props) => {
  return (
    <div className="h-full px-2 pt-4">
      <div className="flex flex-col space-y-2">
        <span className="text-white font-bold text-4xl">
          All Microcredentials
        </span>
        <span className="text-white text-1xl">
          The Adventure Awaits: Explore the Thrilling Realm of Comprehensive
          Sports Training Education.
        </span>
      </div>
      <div className="py-5 flex flex-col md:flex-row max-md:space-y-3 md:space-x-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default HomeTabs;
