import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type BaseShadowContainerType = {
  className: string;
  content: React.ReactNode;
  contentStyle?: string;
};

const BaseShadowContainer: React.FC<BaseShadowContainerType> = ({
  className,
  content,
  contentStyle,
}) => {
  return (
    <div className={clsx('shadow-inner-custom', className)}>
      <div>
        <p className={twMerge('text-white', contentStyle)}>{content}</p>
      </div>
    </div>
  );
};

export default BaseShadowContainer;
