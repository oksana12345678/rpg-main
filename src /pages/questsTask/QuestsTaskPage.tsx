import clsx from 'clsx';
import BaseShadowContainer from 'components/BaseShadowContainer/BaseShadowContainer';
import useApplyBackButton from 'hooks/useApplyBackButton';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Quest, QuestsTask } from 'types/quest';
import LinkList from './components/LinkList';
import { getClassMapping } from 'constants/classMapping';
import CustomButton from 'components/Buttons/CustomButton';
import { ROUTES } from 'constants/routes';
import { useNavigate } from 'react-router-dom';
import questsActions from 'store/quests/questsSlice';
import userActions from 'store/user/userSlice';

const QuestsTaskPage: React.FC = () => {
  useApplyBackButton({});

  const tasks = useAppSelector((state) => state.quests.tasks);
  const user = useAppSelector((state) => state.user.user);
  const { quests } = useAppSelector((state) => state.quests);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { setQuestDetailsId } = questsActions;
  const { setQuestStatus } = userActions;

  const questDetailsId = useAppSelector((state) => state.quests.questDetailsId);
  const questDetails = quests.find((quest: Quest) => quest.id === String(questDetailsId));

  const questTask = tasks.find((task: QuestsTask) => task.id === String(questDetailsId));
  const userClass = user?.userClass;

  const { container } = getClassMapping(userClass);

  const front = userClass === 'Воїн фронтенду';

  const handleOpenSendPage = () => {
    dispatch(setQuestDetailsId(questDetailsId));
    if (questDetails) {
      dispatch(
        setQuestStatus({
          name: questDetails.name,
          status: 'on_revive',
          isLocked: false,
          progress: 50,
        }),
      );
    }

    navigate(ROUTES.SEND_TASK);
  };

  return (
    <main className="pt-6">
      <div className="flex h-full flex-col items-center justify-center gap-5">
        <h1 className="text-xl font-semibold">{questDetails?.name}</h1>
        <p className="text-lg font-semibold text-white">{questTask?.name}</p>
        <div className="flex h-full flex-col items-center justify-center gap-10">
          {questTask && (
            <BaseShadowContainer
              content={questTask.description}
              className={clsx(
                'mb-0 flex w-[326px] items-center justify-center rounded-lg px-5 py-4 shadow-inner-custom',
                container,
              )}
              contentStyle="text-sm"
            />
          )}
          {questTask && <LinkList questTask={questTask} front={front} />}
          <CustomButton className="w-full py-3" onClick={handleOpenSendPage}>
            Відправити завдання
          </CustomButton>
        </div>
      </div>
    </main>
  );
};

export default QuestsTaskPage;
