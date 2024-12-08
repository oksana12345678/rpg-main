import React from 'react';

interface ButtonGradientProps {
  text: string;
  gradientColors?: string; // Tailwind gradient colors (e.g., "from-blue-500 to-green-500")
  size?: string; // Tailwind size classes (e.g., "py-2 px-4")
  textColor?: string; // Tailwind text color class (e.g., "text-white")
  className?: string; // Additional Tailwind classes
  onClick?: () => void; // Click handler
}

const ButtonGradient: React.FC<ButtonGradientProps> = ({
  text,
  gradientColors = 'from-blue-500 to-green-500',
  size = 'py-2 px-4',
  textColor = 'text-white',
  className = '',
  onClick,
}) => {
  return (
    <button
      className={`btn btn-primary max-w-52 flex-1 bg-gradient-to-r ${gradientColors} ${textColor} ${size} rounded-3xl text-xl font-bold shadow-md transition-all duration-300 hover:shadow-lg ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonGradient;
