import { userHandlers } from './user';
import { questsHandlers } from './quests';
import { avatarsHandlers } from './avatars';
import { leaderboardHandlers } from './leaderboard';

export const handlers = [
  ...userHandlers,
  ...questsHandlers,
  ...avatarsHandlers,
  ...leaderboardHandlers,
];
