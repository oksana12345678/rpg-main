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
  type: string;
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
  complete_quest_regards?: Stage[];
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
  home_work_link?: string;
};
interface ClassOption {
  name: string;
  description: string;
}
interface LinkDetails {
  figma?: string[];
  technics_task?: string;
}

interface Links {
  front?: LinkDetails[];
  ux_ui?: LinkDetails[];
}

export interface QuestsTask {
  name?: string;
  id: string;
  description?: string;
  links?: Links[];
  target_name?: string;
  choose_class?: ClassOption[];
}
