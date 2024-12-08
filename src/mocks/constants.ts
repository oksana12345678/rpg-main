import { JobTitle } from 'types/avatar';

export const STORAGE_KEYS = {
  USER: 'user',
  QUESTS: 'quests',
  AVATARS: 'avatars',
  LEADERBOARD: 'leaderboard',
  PREVIEW_AVATARS: 'previewAvatars',
};

export const maleFirstNames = [
  'Олександр',
  'Михайло',
  'Андрій',
  'Віктор',
  'Дмитро',
  'Володимир',
  'Сергій',
  'Олег',
  'Іван',
  'Тарас',
];

export const femaleFirstNames = [
  'Ірина',
  'Ольга',
  'Наталія',
  'Світлана',
  'Марія',
  'Анна',
  'Катерина',
  'Юлія',
  'Людмила',
  'Тетяна',
];

export const firstNames = [...maleFirstNames, ...femaleFirstNames];

export const lastNames = [
  'Шевченко',
  'Коваленко',
  'Бондаренко',
  'Ткаченко',
  'Кравченко',
  'Олійник',
  'Лисенко',
  'Мельник',
  'Романенко',
  'Петренко',
  'Гончаренко',
  'Савченко',
  'Кравчук',
  'Мороз',
  'Козак',
  'Павленко',
  'Клименко',
  'Сокіл',
  'Крамаренко',
  'Бойко',
  '',
];

export const listJobTitles = [
  JobTitle.FrontEnd,
  JobTitle.BackEnd,
  JobTitle.UXUIDesign,
  JobTitle.QA,
  JobTitle.PM,
  JobTitle.FullStack,
  JobTitle.HR,
  JobTitle.BA,
  JobTitle.DevOps,
];
