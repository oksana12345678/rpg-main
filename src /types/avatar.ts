export type Avatar = {
  id: string;
  telegramId: string;
  firstName: string;
  lastName: string;
  role: string;
  imageUrl: string;
  level: number;
  points: number;
  coins: number;
  createdAt: string;
  updatedAt: string;
  experience: number;
  jobTitle: JobTitle;
};

export enum JobTitle {
  FrontEnd = 'Front-end',
  BackEnd = 'Back-end',
  UXUIDesign = 'UX/UI Design',
  QA = 'QA',
  PM = 'PM',
  FullStack = 'FullStack',
  HR = 'HR',
  BA = 'BA',
  DevOps = 'DevOps',
}
