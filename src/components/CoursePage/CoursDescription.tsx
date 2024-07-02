import React from 'react';
import MyEditorComponent from '../Editor';

type Props = {
  title: string;
  content: string;
};

const CoursDescription = (props: Props) => {
  return (
    <>
      <span className="text-xl text-primary">{props.title}</span>
      <MyEditorComponent
        className="text-sm md:text-lg text-white"
        content={props.content}
      />
    </>
  );
};

export default CoursDescription;
