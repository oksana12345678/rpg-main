import { ActiveQuest, Quest, QuestsTask } from 'types/quest';
import { Avatar } from 'types/avatar';
import { TimeFilterType } from 'types/leaderboard';
import { User, LeaderboardUser, LeaderboardCurrentUser } from 'types/user';

// USER
export type LoginUserResponse = {
  user: User;
};

export type RegisterUserRequest = {
  role: string;
};

export type UpdateUserRequest = {
  userClass?: string;
  coins?: number;
  points?: number;
  level?: number;
  userQuests?: ActiveQuest[];
};

export type RegisterUserResponse = {
  user: User;
};

// AVATARS
export type GetAvatarsResponse = {
  avatars: Avatar[];
};

// QUESTS
export type GetAllQuestsResponse = {
  quests: Quest[];
};

export type GetQuestsTaskResponse = {
  tasks: QuestsTask[];
};

export type GetQuestByIdResponse = {
  quest?: Quest;
};

// LEADERBOARD
export type GetLeaderboardDataRequest = {
  timeType: TimeFilterType;
  timeCount: number;
};

export type GetLeaderboardDataResponse = {
  users: LeaderboardUser[];
  currentUser: LeaderboardCurrentUser;
};
