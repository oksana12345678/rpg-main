import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Quest } from 'types/quest';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import questsActions from 'store/quests/questsSlice';
import { ROUTES } from 'constants/routes';
import ProgressBar from 'components/ProgressBar/ProgressBar';
import CustomButton from 'components/Buttons/CustomButton';

type QuestCardProps = {
  quest: Quest;
};

const QuestCard: React.FC<QuestCardProps> = ({ quest }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);

  const userQuest = user?.userQuests.find((uq) => uq.quest.name === quest.name);

  const handleAcceptClick = () => {
    dispatch(questsActions.setQuestDetailsId(quest.id));
    navigate(ROUTES.QUEST_DETAILS);
  };

  return (
    <div className="flex w-full flex-col gap-4 rounded-lg bg-transparent">
      <div className="flex w-full gap-4">
        <img src={quest.imageUrl} alt={quest.name} className="h-[30px] w-[30px] rounded-lg" />
        <div className="flex w-full items-end gap-12">
          <h3 className="font-semibold">{quest.name}</h3>
          {userQuest && userQuest.progress === 100 && (
            <div className="flex items-center text-green-600">
              <span className="mr-2">Пройдено</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full flex-col gap-6">
        <p className="text-sm font-bold">Мета:</p>
        <div className="text-sm">{quest.description}</div>
        <div className="flex items-center gap-6">
          {!userQuest && (
            <CustomButton
              className="w-full rounded-md bg-button_accent px-3 py-1 text-[0.7rem] font-semibold text-white"
              onClick={handleAcceptClick}
            >
              Пройти квест
            </CustomButton>
          )}
          {userQuest && (
            <>
              {userQuest.progress < 100 ? (
                <CustomButton
                  className="w-full rounded-md bg-button_accent px-3 py-1 text-[0.7rem] font-semibold text-white"
                  onClick={handleAcceptClick}
                >
                  Прийняти
                </CustomButton>
              ) : (
                <CustomButton
                  className="w-full rounded-md border-transparent bg-button_two px-3 py-1 text-[0.7rem] font-semibold text-white"
                  // onClick={handleAcceptClick}
                  disabled
                >
                  Переглянути
                </CustomButton>
              )}
            </>
          )}
          {userQuest && userQuest.progress < 100 && userQuest.progress > 0 && (
            <div className="flex w-full items-center gap-3">
              <ProgressBar progress={userQuest.progress} />
              <span className="mt-1 block text-center text-gray-600">{userQuest.progress}%</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestCard;
