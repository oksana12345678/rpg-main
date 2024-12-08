import useApplyBackButton from 'hooks/useApplyBackButton';
import Icon from 'components/Icon';
import { Quest } from 'types/quest';
import CustomButton from 'components/Buttons/CustomButton';
import questsActions from 'store/quests/questsSlice';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import userActions from 'store/user/userSlice';
import { complexity, goal, rewards } from 'assets/images/quests/quest_details';
import DetailedShadowContainer from 'components/DetailedShadowContainer/DetailedShadowContainer';
import BaseShadowContainer from 'components/BaseShadowContainer/BaseShadowContainer';

const QuestDetailsPageV2 = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { setQuestDetailsId } = questsActions;
  const { setQuestStatus } = userActions;

  const questDetailsId = useAppSelector((state) => state.quests.questDetailsId);

  useApplyBackButton({});

  const { quests } = useAppSelector((state) => state.quests);

  const questDetails = quests.find((quest: Quest) => quest.id === String(questDetailsId));

  if (!questDetails) return <div>Quest details not found</div>;

  const QUEST_DETAILS = [
    {
      label: 'Мета:',
      desc: questDetails.goal ?? 'No goal specified',
    },
    {
      label: 'Нагорода:',
      desc: questDetails.award ?? 'No award specified',
    },
    {
      label: 'Складність:',
      desc: questDetails.requirements ?? 'No requirements specified',
    },
  ];

  const iconsMap: Record<string, string> = {
    'Мета:': goal,
    'Нагорода:': rewards,
    'Складність:': complexity,
  };

  const getRouteForQuest = (questName: string): string | null => {
    return questName === 'Базовий квест' ? ROUTES.CHOOSE_CLASS : null;
  };

  const handleNavigation = (route: string) => {
    navigate(route);
    dispatch(setQuestDetailsId(questDetailsId));
    dispatch(setQuestStatus({ name: questDetails.name, status: 'in-progress' }));
  };

  const handleClickToRedirect = () => {
    const route = getRouteForQuest(questDetails.name);
    route ? handleNavigation(route) : alert('Сторінка знаходиться на стадії розробки');
  };

  return (
    <main className="flex min-h-screen w-[100%] items-center justify-center bg-bg_text_accent py-6 text-white">
      <div className="flex max-w-[500px] flex-col gap-5 px-6">
        <h2 className="mx-auto text-2xl font-semibold text-white">{questDetails.name}</h2>
        <p className="text-l flex justify-center font-semibold text-white">
          {questDetails.subtitle}
        </p>
        <ul className="flex flex-col gap-1.5">
          {QUEST_DETAILS.map((content, index) => (
            <li key={index} className="flex flex-col">
              <DetailedShadowContainer
                icon={<Icon src={iconsMap[content.label]} />}
                title={content.label}
                content={content.desc}
                contentStyle="text-white text-sm"
                className="rounded-lg bg-bg_side_bar px-3 py-2 shadow-main_bg_color"
              />
            </li>
          ))}
        </ul>

        <BaseShadowContainer
          className="flex flex-col items-center justify-center gap-6 rounded-lg px-5 py-3 shadow-shadow_text_accent"
          contentStyle="max-h-40 overflow-scroll  text-sm leading-5"
          content={questDetails.long_description}
        />
        <CustomButton
          className="w-full rounded-lg border-none bg-button_accent px-28 py-3 text-base font-semibold transition-all delay-300 duration-300 ease-linear hover:bg-gradient-to-r hover:from-button_hover_l hover:to-button_hover_r hover:delay-300"
          onClick={handleClickToRedirect}
        >
          Почати квест
        </CustomButton>
      </div>
    </main>
  );
};

export default QuestDetailsPageV2;
