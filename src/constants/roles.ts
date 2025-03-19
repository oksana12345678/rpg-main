import { RolesImages } from 'components/Images';

export const ROLES = [
  {
    value: 'adventurer',
    label: 'Пригодник',
    description:
      'Пригодник - початковий рівень. Має доступ до базового квесту для візиту в академію та отримання вищих рівнів.',
    isNeedModeration: false,
    Icon: RolesImages.Adventurer,
    closed: false,
  },
  {
    value: 'avatar',
    label: 'Аватар',
    description:
      'Аватар - ментор з досвідом від 3-х років, який проходить квести, допомагає пригодникам проходити квести, заробляє монети.',
    isNeedModeration: true,
    Icon: RolesImages.Avatar,
    closed: true,
  },
  {
    value: 'kingdom',
    label: 'Королівство',
    description: 'Королівство - представник компанії, який може розміщувати квести.',
    isNeedModeration: true,
    Icon: RolesImages.Kingdom,
    closed: true,
  },
];
