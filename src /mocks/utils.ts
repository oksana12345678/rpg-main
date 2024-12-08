import { UserInitData } from 'types/user';
import { maleFirstNames } from './constants';
import { TimeFilterType } from 'types/leaderboard';

export const getUserFromInitData = (authorizationHeader: string): UserInitData => {
  const initDataRaw = authorizationHeader?.split(' ')[1];
  const initData = new URLSearchParams(initDataRaw);
  const user = JSON.parse(initData.get('user') || '');
  return user;
};

export const getRandomElement = <T>(array: T[]): T => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

export const getRandomImageUrl = (firstName: string) => {
  const gender = maleFirstNames.includes(firstName) ? 'men' : 'women';
  const numberPhoto = Math.floor(Math.random() * 99);
  return `https://randomuser.me/api/portraits/${gender}/${numberPhoto}.jpg`;
};

export const getPointsRangeByTimeType = (timeType: TimeFilterType) => {
  switch (timeType) {
    case 'day': {
      return [1, 100];
    }
    case 'week': {
      return [100, 500];
    }
    case 'month': {
      return [500, 1000];
    }
    case 'allTime': {
      return [1000, 2000];
    }
  }
};
