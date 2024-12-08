import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarIcon from 'assets/icons/StarIcon';
import { Quest } from 'types/quest';
import { useAppDispatch } from 'store/hooks';
import questsActions from 'store/quests/questsSlice';
import { ROUTES } from 'constants/routes';

type QuestCardProps = {
  quest: Quest;
};

const QuestCard: React.FC<QuestCardProps> = ({ quest }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleDetailsClick = () => {
    dispatch(questsActions.setQuestDetailsId(quest.id));
    navigate(ROUTES.QUEST_DETAILS);
  };

  const handleAcceptClick = () => {
    // Handle "Прийняти" button click
  };

  return (
    <div className="flex items-center rounded-lg bg-transparent p-3">
      <div className="w-1/3">
        <img src={quest.imageUrl} alt={quest.name} className="rounded-lg" />
      </div>
      <div className="ml-4 w-2/3">
        <div className="mb-1 font-semibold">{quest.name}</div>
        <div className="mb-2 text-[0.7rem]">{quest.description}</div>
        <div className="flex items-center">
          <StarIcon className="star-icon mr-1 h-4 w-4" />
          <span className="text-[0.7rem]">{quest.award}</span>
        </div>
        <div className="mt-2">
          <button
            className="button mr-2 rounded-full bg-button_accent px-3 py-1 text-[0.7rem] font-semibold text-white"
            onClick={handleAcceptClick}
          >
            Прийняти
          </button>
          <button
            className="button rounded-full bg-gray-600 px-3 py-1 text-[0.7rem] font-semibold text-white"
            onClick={handleDetailsClick}
          >
            Докладніше
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestCard;
