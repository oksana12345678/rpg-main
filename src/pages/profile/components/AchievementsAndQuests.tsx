import { useState } from 'react';
import { IconData, ProfileInfoBlock } from './ProfileInfoBlock';

interface AchievementsAndQuestsProps {
  achievementIcons: IconData[];
  questIcons: IconData[];
}

const AchievementsAndQuests = ({ achievementIcons, questIcons }: AchievementsAndQuestsProps) => {
  const [activeTab, setActiveTab] = useState<'achievements' | 'quests'>('achievements');

  return (
    <div className="relative w-full">
      <div className="relative mb-6 flex h-14 w-full items-start justify-between overflow-hidden rounded-lg bg-gradient-to-b from-[#2A006D] to-[#07000E]">
        <div
          className={`absolute top-[-4px] z-0 h-[50px] w-1/2 rounded-b-lg bg-[#06000C] transition-all duration-300 ease-in-out ${
            activeTab === 'quests' ? 'left-1/2' : 'left-0'
          }`}
        ></div>

        <button
          onClick={() => setActiveTab('achievements')}
          className={`relative z-10 w-1/2 px-4 py-2 text-center text-sm font-semibold transition-colors duration-300 ${
            activeTab === 'achievements'
              ? 'ml-1 h-10 w-[48%] rounded-lg border border-[#2A006D] bg-[#06000C] text-white'
              : 'h-full rounded-lg text-white/50'
          }`}
        >
          Досягнення
        </button>
        <button
          onClick={() => setActiveTab('quests')}
          className={`relative z-10 w-1/2 px-4 py-2 text-center text-sm font-semibold transition-colors duration-300 ${
            activeTab === 'quests'
              ? 'mr-1 mt-1 h-10 w-[48%] rounded-lg border border-[#2A006D] bg-[#06000C] text-white'
              : 'h-full rounded-lg text-white/50'
          }`}
        >
          Квести
        </button>
      </div>

      {/* Content */}
      {activeTab === 'achievements' ? (
        <ProfileInfoBlock
          title="Досягнення"
          icons={achievementIcons}
          dynamicText="Всі досягнення"
        />
      ) : (
        <ProfileInfoBlock title="Активні квести" icons={questIcons} dynamicText="Всі квести" />
      )}
    </div>
  );
};

export default AchievementsAndQuests;
