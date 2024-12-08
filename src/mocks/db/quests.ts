import { STORAGE_KEYS } from 'mocks/constants';
import { Quest } from 'types/quest';

export const getQuests = (): Quest[] => {
  const quests = localStorage.getItem(STORAGE_KEYS.QUESTS);
  return quests ? JSON.parse(quests) : [];
};

export const setQuests = (quests: Quest[]) => {
  localStorage.setItem(STORAGE_KEYS.QUESTS, JSON.stringify(quests));
};

// Function to get a quest by ID
export const getQuestById = (id: string): Quest | undefined => {
  const quests = getQuests();
  return quests.find((quest) => quest.id === id);
};

// Initialize quests data if it doesn't exist
export const initializeQuests = () => {
  const quests = getQuests();
  if (quests.length === 0) {
    const initialQuests: Quest[] = [
      {
        name: 'Базовий квест',
        subtitle: 'Візит до Академії',
        imageUrl: 'https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/basic.png',
        description: 'Візит до Академії для отримання першого рівня та вибору базового класу',
        long_description: `Ти тільки розпочав свою подорож у світ IT. Перший крок - відвідати Академію, де ти можеш
          обрати свій перший базовий клас: Винахідник UI/UX або Воїн Фронтенда. В Академії ти
          отримаєш знання та інструкції, щоб зробити перший крок до освоєння свого класу.`,
        requirements: 'Базова, для початківців.',
        award: 'Отримання першого рівня, Мідні Монети та відкриття перших рутинних квестів.',
        goal: 'Вибрати базовий клас між  дизайнером  та  фронтенд-розробником.',
        id: '4355f274-f670-4e11-a413-c95170923458',
        createdAt: '2024-08-27T23:09:22.926366',
        updatedAt: null,
        completeLabel: 'Обраний клас',
        complete_quest_regards: [
          {
            label: 'Винахідник UX/UI',
            name: 'Винахідник UX/UI',
            desc: [
              'Перший квест пройдено. ',
              'Вітаю, тепер ти ',
              'Ти отримав перший рівень, доступ до рутинних квестів, мідні монети, бали.',
            ],
            coins: 200,
            level: 1,
            points: 100,
            regards: [
              { desc: 'Рівень', value: 1 },
              { desc: 'Монети', value: 200 },
              { desc: 'Бали', value: 100 },
            ],
          },
          {
            label: 'Воїн фронтенду',
            name: 'Воїн фронтенду',
            desc: [
              'Перший квест пройдено. ',
              'Вітаю, тепер ти ',
              'Ти отримав перший рівень, доступ до рутинних квестів, мідні монети, бали.',
            ],
            coins: 200,
            level: 1,
            points: 100,
            regards: [
              { desc: 'Рівень', value: 1 },
              { desc: 'Монети', value: 200 },
              { desc: 'Бали', value: 100 },
            ],
          },
        ],
      },
      {
        name: 'Рутинний квест',
        subtitle: 'Створення мобільного лендингу',
        imageUrl: 'https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/routine.png',
        description: 'Виконання тестового завдання для отримання артефакту та Мідних Монет',
        long_description:
          'Цей квест дасть вам можливість отримати базові ресурси та покращити свої навички. Завдання включає проходження тесту, який допоможе вам здобути артефакт та мідні монети для подальших пригод.',
        requirements: 'Необхідно мати базовий рівень та пройти початковий квест.',
        award: 'Oчки досвіду, мідні монети, артефакти',
        goal: 'Виконання тестового завдання для отримання артефакту та Мідних Монет',
        id: '32948200-586b-42c2-b708-716e87f0a028',
        createdAt: '2024-08-27T23:09:22.926366',
        updatedAt: null,
        completeLabel: 'Створення мобільного лендингу',
        complete_quest_regards: [
          {
            label: 'Landing Page',
            name: 'Винахідник UX/UI',
            desc: [
              'Квест пройдено.',
              'Вітаю, завдання прийнято',
              'Ти отримав другий рівень, сертифікат дизайнера, доступ до командних квестів, мідні  монети, бали.',
            ],
            coins: 500,
            level: 2,
            points: 300,
            regards: [
              { desc: 'Сертифікат' },
              { desc: 'Рівень', value: 2 },
              { desc: 'Монети', value: 500 },
              { desc: 'Бали', value: 300 },
            ],
          },
          {
            label: 'Landing Page',
            name: 'Воїн фронтенду',
            desc: [
              'Квест пройдено.',
              'Вітаю, завдання прийнято',
              'Ти отримав другий рівень, сертифікат Front-end developer, доступ до командних квестів, мідні  монети, бали.',
            ],
            coins: 500,
            level: 2,
            points: 300,
            regards: [
              { desc: 'Сертифікат' },
              { desc: 'Рівень', value: 2 },
              { desc: 'Монети', value: 500 },
              { desc: 'Бали', value: 300 },
            ],
          },
        ],
      },
      {
        name: 'Пригодницький квест',
        imageUrl: 'https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/adventure.png',
        description: 'Проходження кар’єрного коучинга, навчальних курсів та подібних завдань',
        long_description:
          'Цей квест відкриває перед вами можливості для професійного зростання та розвитку. Ви пройдете коучинг-сесії та навчальні курси, які допоможуть вам підвищити свої навички та отримати нові можливості.',
        requirements: 'Необхідно пройти попередні рівні квестів і мати достатньо очок досвіду.',
        award: 'Підвищення класу, рівня, артефакти, мідні монети',
        goal: 'Проходження кар’єрного коучинга, навчальних курсів та подібних завдань',
        id: '5fc0b9d7-2b36-444b-a0fc-ecb6200fab53',
        createdAt: '2024-08-27T23:09:22.926366',
        updatedAt: null,
      },
      {
        name: 'Багаторазовий квест',
        imageUrl: 'https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/reusable.png',
        description: 'Залучайте нових учасників за партнерським посиланням',
        long_description:
          'Цей квест дозволяє вам постійно отримувати нагороди за залучення нових учасників. Діліться своїм партнерським посиланням з друзями і отримуйте очки досвіду кожного разу, коли новий учасник приєднується до гри.',
        requirements: 'Мати активний акаунт і доступ до партнерської програми.',
        award: 'Очки досвіду',
        goal: 'Залучайте нових учасників за партнерським посиланням',
        id: '777c238a-7432-4bbb-beb4-742ea2afb672',
        createdAt: '2024-08-27T23:09:22.926366',
        updatedAt: null,
      },
      {
        name: 'Командний квест',
        imageUrl: 'https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/team.png',
        description: 'Участь у командному проекті для отримання досвіду та Золотих Монет',
        long_description:
          'Цей квест дозволяє вам працювати в команді для досягнення спільної мети. Завдяки командній роботі ви отримаєте більше досвіду та цінні нагороди, включаючи золоті монети та артефакти.',
        requirements: 'Необхідно бути частиною команди та мати базові навички роботи в групі.',
        award: 'Очки досвіду, золоті та мідні монети, артефакти',
        goal: 'Участь у командному проекті для отримання досвіду та Золотих Монет',
        id: '921e4dac-ee68-4f77-8f8f-57f610cf59f0',
        createdAt: '2024-08-27T23:09:22.926366',
        updatedAt: null,
      },
      {
        name: 'Битва з міні-босом',
        imageUrl: 'https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/mini_boss.png',
        description: 'Складання онлайн-іспиту для отримання артефакту',
        long_description:
          'Цей квест є важливою віхою у вашій пригоді. Змагайтеся з міні-босом, щоб скласти іспит і отримати цінний артефакт, який допоможе вам у подальшій подорожі.',
        requirements: 'Необхідно мати середній рівень та попередньо отримати базові артефакти.',
        award: 'Артефакти',
        goal: 'Складання онлайн-іспиту для отримання артефакту',
        id: 'c93399e7-0f73-4e16-b985-aa07ef794f0f',
        createdAt: '2024-08-27T23:09:22.926366',
        updatedAt: null,
      },
    ];

    setQuests(initialQuests);
  }
};

initializeQuests();
