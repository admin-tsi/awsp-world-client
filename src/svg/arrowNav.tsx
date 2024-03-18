import React from 'react';

type Props = {};

const ArrowNav = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-chevron-left text-secondary"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
};

export default ArrowNav;
