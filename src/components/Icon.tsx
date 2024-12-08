import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
  icon?: IconType; // Icon component from react-icons
  src?: string; // Image source URL
  alt?: string; // Alt text for the image
  size?: string; // Tailwind size class like 'text-xl' or width/height for images
  color?: string; // Tailwind color class for icons
  className?: string; // Additional Tailwind classes
}

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  src,
  alt = '',
  size = 'text-xl',
  color = 'text-black',
  className = '',
}) => {
  if (IconComponent) {
    return <IconComponent className={`${size} ${color} ${className}`} />;
  }

  if (src) {
    return <img src={src} alt={alt} className={`${size} ${className}`} />;
  }

  return null;
};

export default Icon;
