import emailjs from 'emailjs-com';
import CustomButton from 'components/Buttons/CustomButton';
import Icon from 'components/Icon';
import useApplyBackButton from 'hooks/useApplyBackButton';
import { IoClose } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import modalActions from 'store/modalWindows/modalWindows';
import { Quest, QuestsTask } from 'types/quest';
import send from '../../assets/images/Comment.svg';
import NotificationBottom from 'components/NotificationBottom/NotificationBottom';
import userActions from 'store/user/userSlice';

import { useState } from 'react';
import userApi from 'store/user/userApi';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

const SendTask = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  useApplyBackButton({});
  const [homeworkLink, setHomeworkLink] = useState('');
  const [updateUserAccount] = userApi.useUpdateUserAccountMutation();
  const user = useAppSelector((state) => state.user.user);

  const { quests } = useAppSelector((state) => state.quests);
  const isSuccessModalOpen = useAppSelector((state) => state.modal.successModalOpen);
  const isErrorModalOpen = useAppSelector((state) => state.modal.errorModalOpen);
  const questDetailsId = useAppSelector((state) => state.quests.questDetailsId);
  const userClass = user?.userClass;

  const questDetails = quests.find((quest: Quest) => quest.id === String(questDetailsId));
  const tasks = useAppSelector((state) => state.quests.tasks);
  const questTask = tasks.find((task: QuestsTask) => task.id === String(questDetailsId));
  const front = userClass === 'Воїн фронтенду';
  const uxUi = userClass === 'Винахідник UX/UI';

  const handleCloseSuccess = () => {
    dispatch(modalActions.setCloseModal());
    navigate(ROUTES.PROFILE);
    setHomeworkLink('');
  };

  const handleClose = () => {
    dispatch(modalActions.setCloseModal());
  };

  const sendEmail = () => {
    const templateParams = {
      to_name: 'It Academy',
      from_name: user?.firstName || 'Ім’я відправника',
      message: `Домашнє завдання за посиланням: ${homeworkLink}, Ім'я квесту до якого надіслане домашнє завдання  ${questDetails?.name}`,
      // userEmail: user?.email,
    };

    emailjs
      .send('service_7phsvpf', 'emplate_4b1hq3j', templateParams, 'FQDhKeQVIrAdhhbN6')
      .then((result) => {
        console.log('Email sent:', result.text);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  const handleSuccessNotification = async () => {
    if (!questDetails) return;

    dispatch(modalActions.setSuccessModalOpen());
    dispatch(
      userActions.setQuestStatus({
        name: questDetails.name,
        status: 'on_revive',
        isLocked: false,
        progress: 75,
        home_work_link: homeworkLink,
      }),
    );

    const currentActiveQuests = user?.userQuests || [];

    const updatedActiveQuests = currentActiveQuests.map((quest) =>
      quest.quest.name === questDetails.name
        ? {
            ...quest,
            status: 'on_revive',
            isLocked: false,
            progress: 75,
            home_work_link: homeworkLink,
          }
        : quest,
    );

    const updatedUser = {
      ...user,
      userQuests: updatedActiveQuests,
    };

    await updateUserAccount(updatedUser);

    sendEmail();
  };

  const handleErrorNotification = () => {
    dispatch(modalActions.setErrorModalOpen());
  };

  const handleSubmit = () => {
    if (!homeworkLink.trim()) {
      handleErrorNotification();
    } else {
      handleSuccessNotification();
    }
  };

  if (!questDetails || !questTask) {
    return <div>Quest details or task not found.</div>;
  }

  return (
    <main className="h-full w-full pt-6">
      <div className="flex h-full w-full flex-col items-center justify-start gap-5 px-6">
        <h1 className="text-xl font-semibold">{questDetails.name}</h1>
        <p className="text-lg font-semibold">{questTask.name}</p>

        <div className="flex h-full w-full flex-col items-center gap-10">
          <div className="group relative flex w-full flex-col gap-5">
            <label htmlFor="homeworkLink" className="flex w-[300px] text-sm font-semibold">
              Завантажуй посилання на домашнє завдання:
            </label>
            <input
              id="homeworkLink"
              className={`relative h-[120px] w-full rounded-lg bg-transparent pl-4 text-sm shadow-inner-custom shadow-shadow_text_accent focus:outline-none focus:ring-2 ${
                isErrorModalOpen ? 'ring-red-500' : 'focus:ring-button_accent'
              }`}
              type="text"
              value={homeworkLink}
              onChange={(e) => setHomeworkLink(e.target.value)}
            />

            {front && (
              <div className="pointer-events-none absolute top-[60px] w-full -translate-y-[10px] transform rounded-md bg-button_accent bg-opacity-70 px-4 py-2 text-center text-xs text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
                Додай посилання на репозиторій та живу сторінку.
              </div>
            )}
            {uxUi && (
              <div className="pointer-events-none absolute top-[60px] w-full -translate-y-[10px] transform rounded-md bg-button_accent bg-opacity-70 px-4 py-2 text-center text-xs text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
                Додай посилання на Figma aбо інший фреймворк який використовувався.
              </div>
            )}
            <NotificationBottom
              title="Помилка!"
              subtitle="Поле не може бути порожнім"
              desc={
                <span
                  dangerouslySetInnerHTML={{
                    __html: 'Будь ласка,<br /> додайте посилання на домашне завдання!',
                  }}
                />
              }
              descStyle="text-xs w-[240px] text-center break-words word-break normal"
              backDropStyle="shadow-inner-custom-big shadow-error_color w-[90%] h-[132px] left-1/2 rounded-lg top-[36%] -translate-x-1/2 -translate-y-[48%]"
              className="bottom-[56%] flex h-[110px] w-4/5 flex-col bg-error_color py-2"
              onClose={handleClose}
              isOpenModal={isErrorModalOpen}
              subtitleStyle="text-white text-center "
              titleStyle="text-white text-base uppercase "
            />
          </div>
          <CustomButton onClick={handleSubmit} className="w-full py-3">
            Відправити завдання
          </CustomButton>
        </div>
      </div>

      {/* Notification for success */}
      <NotificationBottom
        title="Завдання успішно відправлене та знаходиться на перевірці"
        subtitle={<Icon src={send} size="w-[200px]" />}
        closeButtonContent={<IoClose className="h-5 w-5 text-white hover:text-button_accent" />}
        className="flex h-[420px] w-[380px] flex-col bg-notification_window p-4 shadow-inner-custom-big shadow-shadow_text_accent"
        onClose={handleCloseSuccess}
        backDropStyle="bg-backdrop"
        isOpenModal={isSuccessModalOpen}
        titleStyle="text-white text-center m-[24px]"
      />
    </main>
  );
};

export default SendTask;
