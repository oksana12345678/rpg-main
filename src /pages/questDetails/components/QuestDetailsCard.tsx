import React from 'react';

interface QuestDetailsCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

const QuestDetailsCard: React.FC<QuestDetailsCardProps> = ({ icon, title, content }) => {
  return (
    <div className="flex items-center rounded-lg bg-[#1d1d1f]">
      <div className="flex w-2/6 justify-center">{icon}</div>
      <div className="ml-6 w-4/6">
        <h3 className="text-l font-semibold">{title}</h3>
        <div className="mt-2 text-xs">{content}</div>
      </div>
    </div>
  );
};

export default QuestDetailsCard;
