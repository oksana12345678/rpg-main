export type Achievement = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  isLocked: boolean;
  userId: number;
  createdAt: string;
  updatedAt: string;
};
export type Stage = {
  label: string;
  name: string;
  desc: string[];
  coins: number;
  level: number;
  points: number;
  regards: { desc: string; value?: number }[];
};

export type Quest = {
  id: string | number;
  name: string;
  subtitle?: string;
  imageUrl: string;
  description: string;
  long_description: string;
  award: string;
  goal: string;
  requirements: string;
  createdAt: string;
  updatedAt: string | null;
  completeLabel?: string;
  stages?: Stage[];
};

export type ActiveQuest = {
  id: number;
  userId: number;
  questId: number;
  status: string;
  progress: number;
  startedAt: string | null;
  completedAt: string | null;
  isLocked: boolean;
  createdAt: string;
  updatedAt: string;
  quest: Quest;
};
