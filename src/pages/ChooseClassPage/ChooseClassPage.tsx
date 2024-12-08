import Icon from 'components/Icon';
import { frontEndWarrior, UX_UI } from '../../assets/images/chooseClan/index';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import ChooseClanCard from './components/ChooseClassCard';
import useApplyBackButton from 'hooks/useApplyBackButton';
import { Pagination } from 'swiper/modules';
import { CLASS } from 'constants/chooseClass';
import CustomButton from 'components/Buttons/CustomButton';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';
import { useState } from 'react';
import { ROUTES } from 'constants/routes';
import { twJoin } from 'tailwind-merge';
import userActions from 'store/user/userSlice';
import questsActions from 'store/quests/questsSlice';

const QuestChooseClanPage = () => {
  useApplyBackButton({});
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { setQuestStatus } = questsActions;

  const [selectedClan, setSelectedClan] = useState(0);

  const DETAILS_CONTENT = CLASS.map((classItem) => ({
    label: classItem.name,
    value: classItem.desc,
    icon: classItem.name === 'Винахідник UX/UI' ? UX_UI : frontEndWarrior,
  }));

  const handleSubmit = () => {
    const chosenClan = DETAILS_CONTENT[selectedClan];
    dispatch(userActions.setChooseClass(chosenClan.label));
    //TODO example hove to track progress
    dispatch(setQuestStatus('in-progress'));

    navigate(ROUTES.COMPLETED_QUEST);
  };

  return (
    <main className="flex h-full flex-col items-center justify-center gap-4 overflow-hidden px-6 py-6 text-white">
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
              setSelectedClan(swiper.activeIndex); // Update selected clan on slide change
            }}
          >
            {DETAILS_CONTENT.map(
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
