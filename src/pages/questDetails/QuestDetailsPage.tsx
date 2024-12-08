import { useParams } from 'react-router-dom';
import { useGetQuestByIdQuery } from 'store/quests/questsApi';

import Icon from 'components/Icon';
import Header from 'components/Header';
import Spinner from 'components/Spinner';
import StatusMessage from 'components/StatusMessage';
import ButtonGradient from 'components/Buttons/ButtonGradient';

import useApplyBackButton from 'hooks/useApplyBackButton';

import goal from 'assets/images/quests/quest_details/goal.png';
import rewards from 'assets/images/quests/quest_details/rewards.png';
import requirements from 'assets/images/quests/quest_details/requirements.png';

import QuestDetailsCard from './components/QuestDetailsCard';

const QuestDetailsPage = () => {
  useApplyBackButton({});
  // Get questId from the URL params
  const { questId } = useParams<{ questId: string }>();
  // Fetch quest details, but only if questId is valid
  const {
    data: quest,
    isLoading,
    error,
  } = useGetQuestByIdQuery(questId!, {
    skip: !questId, // Skip the query if questId is undefined
  });

  if (!questId) {
    return <div>No Quest ID provided</div>;
  }

  if (isLoading) return <Spinner />;
  if (error) return <StatusMessage message="An error occurred while fetching the quest details." />;
  if (!quest) return <StatusMessage message="Quest not found" />;

  return (
    <div className="bg-main_bg_color flex min-h-screen flex-col text-white">
      <Header pageName="Деталі квесту" className="mb-4 text-gray-300" />
      <main className="flex-grow p-6">
        <h2 className="mb-6 flex justify-center text-xl font-bold text-gray-200">{quest.name}</h2>

        <div className="space-y-6">
          <QuestDetailsCard
            icon={<Icon src={goal} className="text-4xl text-yellow-500" />}
            title="Мета:"
            content={<div className="mt-2">{quest.goal}</div>}
          />
          <QuestDetailsCard
            icon={<Icon src={requirements} className="text-4xl text-yellow-500" />}
            title="Вимоги:"
            content={<div className="mt-2">{quest.requirements}</div>}
          />
          <QuestDetailsCard
            icon={<Icon src={rewards} className="text-4xl text-yellow-500" />}
            title="Нагороди:"
            content={<div className="mt-2">{quest.award}</div>}
          />
        </div>

        <div className="mt-8 flex justify-center">
          <ButtonGradient
            text="Почати квест"
            gradientColors="from-blue-500 to-purple-600"
            size="py-3 px-6"
          />
        </div>
      </main>
    </div>
  );
};

export default QuestDetailsPage;
