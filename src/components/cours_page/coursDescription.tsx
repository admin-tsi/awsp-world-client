import React from 'react';

type Props = {
  title: string;
  content: string;
};

const CoursDescription = (props: Props) => {
  return (
    <>
      <span className="text-xl text-primary">{props.title}</span>
      <p className="text-sm md:text-lg text-white">{props.content}</p>
    </>
  );
};

export default CoursDescription;
