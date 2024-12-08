import { firstNames, lastNames, listJobTitles, STORAGE_KEYS } from 'mocks/constants';
import { getRandomElement, getRandomImageUrl } from 'mocks/utils';
import { Avatar, JobTitle } from 'types/avatar';

const createRandomAvatar = (): Avatar => {
  const firstName = getRandomElement(firstNames);
  return {
    id: Math.random().toString(36).substr(2, 9),
    telegramId: Math.random().toString(36).substr(2, 9),
    firstName,
    lastName: getRandomElement(lastNames),
    jobTitle: getRandomElement(listJobTitles),
    imageUrl: getRandomImageUrl(firstName),
    experience: Math.floor(Math.random() * 18) + 3,
    level: Math.floor(Math.random() * 100) + 1,
    points: Math.floor(Math.random() * 1000),
    coins: Math.floor(Math.random() * 500),
    role: 'avatar',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
};

const setAvatars = (storageKey: string, avatars: Avatar[]) => {
  localStorage.setItem(storageKey, JSON.stringify(avatars));
};

export const getAvatars = (): Avatar[] => {
  const previewStorageAvatars = getPreviewAvatars();
  const storageAvatars = localStorage.getItem(STORAGE_KEYS.AVATARS);
  if (storageAvatars) {
    return JSON.parse(storageAvatars);
  }

  const avatars: Avatar[] = [...previewStorageAvatars];

  for (let i = 0; i < 10; i++) {
    avatars.push(createRandomAvatar());
  }

  setAvatars(STORAGE_KEYS.AVATARS, avatars);
  return avatars;
};

export const getPreviewAvatars = (): Avatar[] => {
  const previewStorageAvatars = localStorage.getItem(STORAGE_KEYS.PREVIEW_AVATARS);
  if (previewStorageAvatars) {
    return JSON.parse(previewStorageAvatars);
  }

  const avatars: Avatar[] = [
    { ...createRandomAvatar(), jobTitle: JobTitle.FullStack },
    { ...createRandomAvatar(), jobTitle: JobTitle.FrontEnd },
    { ...createRandomAvatar(), jobTitle: JobTitle.BackEnd },
    { ...createRandomAvatar(), jobTitle: JobTitle.UXUIDesign },
    { ...createRandomAvatar(), jobTitle: JobTitle.PM },
    { ...createRandomAvatar(), jobTitle: JobTitle.QA },
  ];

  setAvatars(STORAGE_KEYS.PREVIEW_AVATARS, avatars);
  return avatars;
};
