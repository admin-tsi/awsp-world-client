import React from 'react';
import { CircleSpinner } from '@/components/CircleSpinner';

interface CustomButtonProps {
  borderColor?: string;
  backgroundColor?: string;
  moreStyle?: string;
  textColor?: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  borderColor = 'border-gray-500',
  backgroundColor = 'bg-gray-500',
  textColor = 'text-white',
  moreStyle = 'px-6',
  onClick,
  disabled = false,
  loading = false,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg py-3 ${moreStyle} border-2 ${borderColor} ${backgroundColor} ${textColor} font-bold ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'custom-shadow'
      }`}
      disabled={disabled}
    >
      {loading ? <CircleSpinner /> : <span>{children}</span>}
    </button>
  );
};

export default CustomButton;
