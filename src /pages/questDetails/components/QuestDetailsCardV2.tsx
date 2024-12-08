import React from 'react';
import { twMerge } from 'tailwind-merge';

interface QuestDetailsCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  className: string;
}

const QuestDetailsCardV2: React.FC<QuestDetailsCardProps> = ({
  icon,
  title,
  content,
  className,
}) => {
  return (
    <div className="flex max-h-28 flex-col gap-1.5 overflow-hidden rounded-lg">
      <div className="flex items-end gap-4">
        <span className="flex">{icon}</span>
        <h3 className={twMerge('text-base font-medium', className)}>{title}</h3>
      </div>

      <div>
        <p className={twMerge('text-sm font-light', className)}>{content}</p>
      </div>
    </div>
  );
};

export default QuestDetailsCardV2;
