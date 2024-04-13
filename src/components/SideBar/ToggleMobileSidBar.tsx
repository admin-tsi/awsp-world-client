import MobileSideCall from '@/svg/mobileSideCall';
import React from 'react';

interface ToggleButtonProps {
  onClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-background block md:hidden text-white px-4 py-2 fixed bottom-60 right-0 rounded-l-lg shadow"
    >
      <MobileSideCall />
    </button>
  );
};

export default ToggleButton;
