import Icon from 'components/Icon';
import { frontEndWarrior, UX_UI } from '../../assets/images/chooseClan/index';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import ChooseClanCard from './components/ChooseClassCard';
import useApplyBackButton from 'hooks/useApplyBackButton';
import { Pagination } from 'swiper/modules';
import CustomButton from 'components/Buttons/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { useState } from 'react';
import { ROUTES } from 'constants/routes';
import { twJoin } from 'tailwind-merge';
import userActions from 'store/user/userSlice';
import { Quest, QuestsTask } from 'types/quest';

const QuestChooseClanPage = () => {
  useApplyBackButton({});
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { setQuestStatus } = userActions;
  const { quests } = useAppSelector((state) => state.quests);
  const tasks = useAppSelector((state) => state.quests.tasks);
  const questDetailsId = useAppSelector((state) => state.quests.questDetailsId);
  const questDetails = quests.find((quest: Quest) => quest.id === String(questDetailsId));

  const questTask = tasks.find((task: QuestsTask) => task.id === String(questDetailsId));
  const [selectedClan, setSelectedClan] = useState(0);
  const classes = questTask?.choose_class;

  const DETAILS_CONTENT =
    classes &&
    classes.map((classItem) => ({
      label: classItem.name,
      value: classItem.description,
      icon: classItem.name === 'Винахідник UX/UI' ? UX_UI : frontEndWarrior,
    }));

  const handleSubmit = () => {
    const chosenClan = DETAILS_CONTENT && DETAILS_CONTENT[selectedClan];

    if (chosenClan) {
      dispatch(userActions.setChooseClass(chosenClan.label));

      if (questDetails) {
        dispatch(
          setQuestStatus({
            name: questDetails.name,
            status: 'in-progress',
            isLocked: false,
            progress: 75,
          }),
        );
        navigate(ROUTES.COMPLETED_QUEST);
      }
    } else {
      console.warn('Chosen clan is undefined.');
    }

    navigate(ROUTES.COMPLETED_QUEST);
  };

  return (
    <main className="flex h-full flex-col items-center justify-center gap-4 overflow-auto px-6 py-6 text-white">
      <h2 className="text-2xl font-semibold text-white">Візит до Академії</h2>
      <p className="text-xl font-semibold text-white">Обрати базовий клас</p>
      <div className="flex h-auto flex-col items-center gap-4 pb-4">
        <div className="h-auto">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="h-auto w-[326px] pb-14"
            onSlideChange={(swiper) => {
              setSelectedClan(swiper.activeIndex);
            }}
          >
            {DETAILS_CONTENT &&
              DETAILS_CONTENT.map(
                (content, index) =>
                  content && (
                    <SwiperSlide key={index} className="flex flex-col gap-7">
                      <ChooseClanCard
                        icon={<Icon src={content.icon} />}
                        title={content.label}
                        content={content.value}
                      />
                    </SwiperSlide>
                  ),
              )}
          </Swiper>
        </div>
        <CustomButton
          onClick={handleSubmit}
          className={twJoin(
            'relative w-full overflow-hidden bg-button_accent py-2 text-base font-semibold transition-all delay-300 duration-300 ease-linear hover:bg-gradient-to-r hover:from-button_hover_l hover:to-button_hover_r hover:delay-300',
          )}
        >
          Обрати
        </CustomButton>
      </div>
    </main>
  );
};

export default QuestChooseClanPage;
