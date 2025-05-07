import { useAppSelector } from 'store/hooks';

import Header from 'components/Header';
import QuestCard from './components/QuestCard';

const QuestsPage = () => {
  const { quests } = useAppSelector((state) => state.quests);

  if (!quests) return null;

  return (
    <div className="relative m-auto flex h-full max-w-max flex-col gap-3">
      <Header pageName="Вибір квесту" />
      <div className="flex flex-1 flex-col gap-[32px] p-6 pb-10">
        {quests.map((quest) => (
          <QuestCard key={quest.id} quest={quest} />
        ))}
      </div>
    </div>
  );
};

export default QuestsPage;
