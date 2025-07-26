import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
  variant = 'primary',
  size = 'md',
  rounded = 'md'
}) => {
  const baseStyle = `inline-block font-semibold transition px-4 py-2`;
  const sizeMap = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };
  const roundedMap = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    full: 'rounded-full'
  };
  const variantMap = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${sizeMap[size]} ${roundedMap[rounded]} ${variantMap[variant]}`}
    >
      {title}
    </button>
  );
};

export default Button;
