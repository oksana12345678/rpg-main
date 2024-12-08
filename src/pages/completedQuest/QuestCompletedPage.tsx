import useApplyBackButton from 'hooks/useApplyBackButton';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import CustomButton from 'components/Buttons/CustomButton';
import userActions from 'store/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import userApi from 'store/user/userApi';
import { Quest } from 'types/quest';
import QuestCompleteCard from './components/QuestCompletedCard';

const QuestCompletePage = () => {
  const [updateUserAccount] = userApi.useUpdateUserAccountMutation();

  useApplyBackButton({});
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useAppSelector((state) => state.user.user);
  const { quests } = useAppSelector((state) => state.quests);
  const questDetailsId = useAppSelector((state) => state.quests.questDetailsId);
  const selectedClass = user?.userClass;

  const { addCoins, setQuestStatus, addLevel, addPoints } = userActions;

  const questDetails = quests.find((quest: Quest) => quest.id === String(questDetailsId));

  const selectedDetails = questDetails?.stages?.find(
    (stage) => stage.name.toLowerCase() === selectedClass?.toLowerCase(),
  );

  const handleCompleteQuest = async () => {
    if (!questDetails || !selectedDetails) return;

    dispatch(setQuestStatus({ name: questDetails.name, status: 'complete' }));
    dispatch(addCoins(selectedDetails.coins));
    dispatch(addLevel(selectedDetails.level));
    dispatch(addPoints(selectedDetails.points));

    try {
      const currentActiveQuests = user?.activeQuests || [];

      const updatedActiveQuests = currentActiveQuests.map((quest) =>
        quest.quest.name === questDetails.name ? { ...quest, status: 'complete' } : quest,
      );
      await updateUserAccount({
        coins: (user?.coins ?? 0) + selectedDetails.coins,
        userClass: selectedDetails.name,
        activeQuests: updatedActiveQuests,
        points: (user?.points ?? 0) + selectedDetails.points,
        level: selectedDetails.level,
      });

      navigate(ROUTES.PROFILE);
    } catch (error) {
      console.error('Error updating user account:', error);
    }
  };

  return (
    <main className="flex h-full w-full flex-col items-center overflow-hidden py-4">
      <div className="flex h-full w-full flex-col items-center justify-center gap-5 overflow-hidden px-6 text-white">
        <h1 className="text-2xl font-semibold text-white">Візит до Академії</h1>
        <h2 className="text-xl font-semibold text-white">{questDetails?.completeLabel}</h2>

        {selectedDetails ? (
          <div className="flex h-auto w-full flex-col items-center gap-9 pb-6 md:w-3/4">
            <QuestCompleteCard
              title={selectedDetails.label}
              content={selectedDetails.desc}
              regards={selectedDetails.regards}
            />
            <CustomButton
              onClick={handleCompleteQuest}
              className="relative w-full overflow-hidden border-none bg-button_accent py-3 text-base font-semibold transition-all delay-300 duration-300 ease-linear hover:bg-gradient-to-r hover:from-button_hover_l hover:to-button_hover_r hover:delay-300"
            >
              Прийняти
            </CustomButton>
          </div>
        ) : (
          <p>Oops something went wrong!</p>
        )}
      </div>
    </main>
  );
};

export default QuestCompletePage;
