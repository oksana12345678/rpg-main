import { getUser } from 'mocks/db/user';
import { firstNames, lastNames, STORAGE_KEYS } from 'mocks/constants';
import { getPointsRangeByTimeType, getRandomElement, getRandomImageUrl } from 'mocks/utils';
import { LeaderboardUser } from 'types/user';
import { GetLeaderboardDataResponse } from 'types/api';
import { TimeFilterType } from 'types/leaderboard';

const createRandomLeaderboardUser = (minPoints: number, maxPoints: number): LeaderboardUser => {
  const firstName = getRandomElement(firstNames);
  return {
    id: Math.random().toString(36).substr(2, 9),
    telegramId: Math.random().toString(36).substr(2, 9),
    firstName,
    lastName: getRandomElement(lastNames),
    imageUrl: getRandomImageUrl(firstName),
    points: Math.floor(Math.random() * (maxPoints - minPoints + 1)) + minPoints,
  };
};

export const getLeaderboardData = (key: string): GetLeaderboardDataResponse | null => {
  const leaderboardData = localStorage.getItem(STORAGE_KEYS.LEADERBOARD);
  return leaderboardData ? JSON.parse(leaderboardData)[key] : null;
};

export const setLeaderboardData = (leaderboardData: GetLeaderboardDataResponse, key: string) => {
  const data = localStorage.getItem(STORAGE_KEYS.LEADERBOARD);
  if (data) {
    localStorage.setItem(
      STORAGE_KEYS.LEADERBOARD,
      JSON.stringify({ ...JSON.parse(data), [key]: leaderboardData }),
    );
  } else {
    localStorage.setItem(STORAGE_KEYS.LEADERBOARD, JSON.stringify({ [key]: leaderboardData }));
  }
};

export const generateLeaderboardData = (timeType: TimeFilterType) => {
  // Clearing localStorage for every request for displaying different data
  localStorage.removeItem(STORAGE_KEYS.LEADERBOARD);

  const storageLeaderboardData = getLeaderboardData(timeType);
  const storageUser = getUser();
  const [min, max] = getPointsRangeByTimeType(timeType);
  const users: LeaderboardUser[] = [];

  if (storageLeaderboardData) {
    return storageLeaderboardData;
  }

  if (!storageUser) {
    return;
  }

  const currentUser = { ...storageUser, points: Math.floor(Math.random() * (max - min + 1)) + min };

  for (let i = 0; i < 100; i++) {
    users.push(createRandomLeaderboardUser(min, max));
  }

  users.push(currentUser);

  // users.sort((a, b) => b.points - a.points);

  users.sort((a, b) => {
    if (b.points === a.points) {
      const fullNameA = `${a.firstName} ${a.lastName}`;
      const fullNameB = `${b.firstName} ${b.lastName}`;
      return fullNameA.localeCompare(fullNameB);
    }
    return b.points - a.points;
  });

  const indexCurrentUser = users.findIndex((user) => user.id === storageUser?.id);

  const leaderboardData: GetLeaderboardDataResponse = {
    users: users.slice(0, 50),
    currentUser: {
      ...currentUser,
      position: indexCurrentUser + 1,
    },
  };

  setLeaderboardData(leaderboardData, timeType);

  return leaderboardData;
};
