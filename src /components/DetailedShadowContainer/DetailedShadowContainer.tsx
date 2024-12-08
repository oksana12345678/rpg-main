import clsx from 'clsx';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type DetailedShadowContainerType = {
  className: string;
  content: React.ReactNode;
  contentStyle?: string;
  icon?: React.ReactNode;
  title?: string;
  classNameTitle?: string;
};

const DetailedShadowContainer: React.FC<DetailedShadowContainerType> = ({
  className,
  content,
  contentStyle,
  icon,
  title,
  classNameTitle,
}) => {
  return (
    <div className={clsx('shadow-inner-custom', className)}>
      <div className="flex items-end gap-4">
        {icon ? <span className="flex">{icon}</span> : null}
        {title ? (
          <h3 className={twMerge('text-base font-medium', classNameTitle)}>{title}</h3>
        ) : null}
      </div>

      <div>
        <p className={twMerge('text-black', contentStyle)}>{content}</p>
      </div>
    </div>
  );
};

export default DetailedShadowContainer;
