import { STORAGE_KEYS } from '../../../src/mocks/constants';
import { User, UserInitData } from '../../types/user';

export const getUser = (): User | null => {
  const user = localStorage.getItem(STORAGE_KEYS.USER);
  return user ? JSON.parse(user) : null;
};

export const setUser = (user: User) => {
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
};

export const deleteUser = () => {
  localStorage.removeItem(STORAGE_KEYS.USER);
};

export const createUser = (userInitData: UserInitData, role: string): User => {
  const user: User = {
    id: userInitData.id.toString(), // Duplicated only for mocking purposes, so delete user handler do not fail verification check, on the backend it is UUID generated value
    telegramId: userInitData.id.toString(),
    firstName: userInitData.first_name,
    lastName: userInitData.last_name,
    role: role,
    imageUrl: 'https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/ava6.jpg',
    level: 0,
    points: 0,
    coins: 0,
    userClass: '',
    achievements: [
      {
        id: 117,
        name: 'Початківець',
        description: 'Отримати перший рівень',
        imageUrl: 'https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/achievement_1.png',
        isLocked: false,
        userId: 18,
        createdAt: '2024-08-21T15:52:06.959Z',
        updatedAt: '2024-08-21T15:52:06.959Z',
      },
      {
        id: 118,
        name: 'Новачок',
        description: 'Завершити базове навчання',
        imageUrl: 'https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/achievement_2.png',
        isLocked: false,
        userId: 18,
        createdAt: '2024-08-21T15:52:06.965Z',
        updatedAt: '2024-08-21T15:52:06.965Z',
      },
      {
        id: 119,
        name: 'Дослідник',
        description: 'Виконати 3 різні квести',
        imageUrl: 'https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/achievement_3.png',
        isLocked: true,
        userId: 18,
        createdAt: '2024-08-21T15:52:06.969Z',
        updatedAt: '2024-08-21T15:52:06.969Z',
      },
      {
        id: 120,
        name: 'Воїн',
        description: 'Здобути 5 артефактів',
        imageUrl: 'https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/achievement_4.png',
        isLocked: true,
        userId: 18,
        createdAt: '2024-08-21T15:52:06.976Z',
        updatedAt: '2024-08-21T15:52:06.976Z',
      },
    ],
    userQuests: [
      {
        id: 5,
        userId: 18,
        questId: 55,
        status: 'NOT_STARTED',
        progress: 0,
        startedAt: null,
        completedAt: null,
        isLocked: false,
        createdAt: '2024-08-21T15:52:06.935Z',
        updatedAt: '2024-08-21T15:52:06.935Z',
        quest: {
          id: 55,
          name: 'Базовий квест',
          imageUrl: 'https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/basic.png',
          description: 'Візит до Академії для отримання першого рівня та вибору базового класу',
          long_description:
            'Детальний опис базового квесту, включаючи всі його особливості та етапи.',
          award: 'очки досвіду, підвищення класу',
          goal: 'Візит до Академії для отримання першого рівня та вибору базового класу',
          requirements: 'Потрібно мати рівень 1 або вище.',
          createdAt: '2024-08-21T15:33:22.618Z',
          updatedAt: '2024-08-21T15:33:22.618Z',
        },
      },
      {
        id: 6,
        userId: 18,
        questId: 56,
        status: 'NOT_STARTED',
        progress: 0,
        startedAt: null,
        completedAt: null,
        isLocked: false,
        createdAt: '2024-08-21T15:52:06.942Z',
        updatedAt: '2024-08-21T15:52:06.942Z',
        quest: {
          id: 56,
          name: 'Рутинний квест',
          imageUrl: 'https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/routine.png',
          description: 'Виконання тестового завдання для отримання артефакту та Мідних Монет',
          long_description:
            'Детальний опис рутинного квесту, включаючи всі його особливості та етапи.',
          award: 'очки досвіду, мідні монети, артефакти',
          goal: 'Виконання тестового завдання для отримання артефакту та Мідних Монет',
          requirements: 'Необхідно виконати тестове завдання.',
          createdAt: '2024-08-21T15:33:22.627Z',
          updatedAt: '2024-08-21T15:33:22.627Z',
        },
      },
      {
        id: 7,
        userId: 18,
        questId: 57,
        status: 'NOT_STARTED',
        progress: 0,
        startedAt: null,
        completedAt: null,
        isLocked: true,
        createdAt: '2024-08-21T15:52:06.947Z',
        updatedAt: '2024-08-28T16:30:45.827Z',
        quest: {
          id: 57,
          name: 'Пригодницький квест',
          imageUrl: 'https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/adventure.png',
          description: 'Проходження кар’єрного коучинга, навчальних курсів та подібних завдань',
          long_description:
            'Детальний опис пригодницького квесту, включаючи всі його особливості та етапи.',
          award: 'підвищення класу, рівня, артефакти, мідні монети',
          goal: 'Проходження кар’єрного коучинга, навчальних курсів та подібних завдань',
          requirements: 'Потрібно пройти кар’єрний коучинг.',
          createdAt: '2024-08-21T15:33:22.632Z',
          updatedAt: '2024-08-21T15:33:22.632Z',
        },
      },
      {
        id: 8,
        userId: 18,
        questId: 58,
        status: 'NOT_STARTED',
        progress: 0,
        startedAt: null,
        completedAt: null,
        isLocked: true,
        createdAt: '2024-08-21T15:52:06.952Z',
        updatedAt: '2024-08-28T16:30:45.827Z',
        quest: {
          id: 58,
          name: 'Багаторазовий квест',
          imageUrl: 'https://quests-app-bucket.s3.eu-north-1.amazonaws.com/images/reusable.png',
          description: 'Залучайте нових учасників за партнерським посиланням',
          long_description:
            'Детальний опис багаторазового квесту, включаючи всі його особливості та етапи.',
          award: 'очки досвіду',
          goal: 'Залучайте нових учасників за партнерським посиланням',
          requirements: 'Потрібно залучити нових учасників.',
          createdAt: '2024-08-21T15:33:22.637Z',
          updatedAt: '2024-08-21T15:33:22.637Z',
        },
      },
    ],
    createdAt: '2024-08-21T15:52:06.976Z',
    updatedAt: '2024-08-21T15:52:06.976Z',
  };

  setUser(user);
  return user;
};

export const updateUser = (updatedData: Partial<User>): User => {
  const existingUser = getUser();

  if (!existingUser) {
    throw new Error('User not found');
  }

  const updatedUser: User = {
    ...existingUser,
    ...updatedData,
    updatedAt: new Date().toISOString(),
  };

  setUser(updatedUser);
  return updatedUser;
};
