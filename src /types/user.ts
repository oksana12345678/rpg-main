export type { User as UserTelegram } from '@telegram-apps/sdk-react';
import { Achievement, ActiveQuest } from './quest';

export type User = {
  id: string;
  telegramId: string;
  firstName: string;
  lastName: string;
  role: string;
  imageUrl: string;
  level: number;
  points: number;
  coins: number;
  userClass?: string;
  createdAt: string;
  updatedAt: string;
  achievements: Achievement[];
  userQuests: ActiveQuest[];
  home_work_link?: string;
};

export type LeaderboardUser = Pick<
  User,
  'id' | 'telegramId' | 'firstName' | 'lastName' | 'imageUrl' | 'points'
>;

export type LeaderboardCurrentUser = LeaderboardUser & { position: number };

export type UserInitData = {
  id: number;
  is_bot?: boolean;
  first_name: string;
  last_name: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  added_to_attachment_menu?: boolean;
  allows_write_to_pm?: boolean;
  photo_url?: string;
};
