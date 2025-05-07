import Header from 'components/Header';
import { IoClose } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { Achievement, ActiveQuest } from 'types/quest';

import { UserInfo } from './components/UserInfo';
import { ProfileInfoBlock } from './components/ProfileInfoBlock';
import ModalWindow from 'components/ModalWindow/ModalWindow';
import { ROUTES } from 'constants/routes';
import modalActions from 'store/modalWindows/modalWindows';
import { useNavigate } from 'react-router-dom';
import questsActions from 'store/quests/questsSlice';
import { MODAL_TEXTS } from '../../constants/modalChooseClass';
import UserSkills from './components/userSkills';

const ProfilePage = () => {
  const user = useAppSelector((state) => state.user.user);
  const isOpenModal = useAppSelector((state) => state.modal.modalChooseClass);
  const { quests } = useAppSelector((state) => state.quests);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  if (!user) return null;

  // Map user's achievements and quests to the format expected by ProfileInfoBlock
  const achievementIcons = user.achievements.map((achievement: Achievement) => ({
    src: achievement.imageUrl, // Use the imageUrl from achievements
    isLocked: achievement.isLocked, // Assuming unlocked achievements
  }));

  const questIcons = user.userQuests.map((activeQuest: ActiveQuest) => ({
    src: activeQuest.quest.imageUrl, // Placeholder icon for quests
    isLocked: activeQuest.isLocked, // Assuming active quests are not locked
  }));

  const baseQuest = quests.find((quest) => quest.name === 'Базовий квест');

  const baseId = () => {
    if (baseQuest) {
      return baseQuest.id;
    }
    return null;
  };

  const handleClickToRedirect = () => {
    const baseQuestId = baseId();

    if (baseQuestId) {
      dispatch(questsActions.setQuestDetailsId(baseQuestId));
      navigate(ROUTES.QUEST_DETAILS);
      dispatch(modalActions.setCloseModal());
    }
  };

  const handleClose = () => {
    dispatch(modalActions.setCloseModal());
  };

  return (
    <>
      <Header pageName="Профіль" showSettingsIcon={true} />
      <div className="mx-auto my-auto w-full flex-grow p-4 pb-10 sm:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg">
        <div className="mx-auto max-w-md">
          <UserInfo user={user} />
          {/* //TODO example to use */}
          <div className="py-6">
            {user?.userClass && (
              <p className="text-lg font-semibold text-white">
                Kлас: <span className="text-sm">{user.userClass}</span>
              </p>
            )}
            <UserSkills />
          </div>
          <ProfileInfoBlock
            title="Досягнення"
            icons={achievementIcons}
            dynamicText="Всі досягнення"
          />
          <ProfileInfoBlock title="Активні квести" icons={questIcons} dynamicText="Всі квести" />
        </div>
      </div>
      <ModalWindow
        title={MODAL_TEXTS.title}
        submitButtonText={MODAL_TEXTS.submitButtonText}
        subtitle={MODAL_TEXTS.subtitle}
        onSubmit={handleClickToRedirect}
        onClose={handleClose}
        isOpenModal={isOpenModal}
        closeButtonContent={<IoClose className="h-5 w-5" />}
        classNames="bg-orang_accent duration-300"
      />
    </>
  );
};

export default ProfilePage;
