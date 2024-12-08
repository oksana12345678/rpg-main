import { NavigationImages } from 'components/Images';
import { ROUTES } from 'constants/routes';

type NavigationItem = {
  label: string;
  path: ROUTES;
  Icon: (props: React.HTMLAttributes<HTMLImageElement>) => JSX.Element;
  dropShadowClass: `drop-shadow-${string}`;
};

export const NAVIGATION: Record<string, NavigationItem> = {
  [ROUTES.PROFILE]: {
    label: 'Профіль',
    path: ROUTES.PROFILE,
    Icon: NavigationImages.Profile,
    dropShadowClass: 'drop-shadow-indigo-500',
  },
  [ROUTES.QUESTS]: {
    label: 'Квести',
    path: ROUTES.QUESTS,
    Icon: NavigationImages.Quests,
    dropShadowClass: 'drop-shadow-indigo-700',
  },
  [ROUTES.ACADEMY]: {
    label: 'Академія',
    path: ROUTES.ACADEMY,
    Icon: NavigationImages.Academy,
    dropShadowClass: 'drop-shadow-red-500',
  },
  [ROUTES.INVENTORY]: {
    label: 'Інвентар',
    path: ROUTES.INVENTORY,
    Icon: NavigationImages.Inventory,
    dropShadowClass: 'drop-shadow-yellow-500',
  },
  [ROUTES.KINGDOM]: {
    label: 'Королівство',
    path: ROUTES.KINGDOM,
    Icon: NavigationImages.Kingdom,
    dropShadowClass: 'drop-shadow-blue-500',
  },
  [ROUTES.LEADERBOARD]: {
    label: 'Лідерборд',
    path: ROUTES.LEADERBOARD,
    Icon: NavigationImages.Leaderboard,
    dropShadowClass: 'drop-shadow-green-500',
  },
  [ROUTES.SETTINGS]: {
    label: 'Налаштування',
    path: ROUTES.SETTINGS,
    Icon: NavigationImages.Settings,
    dropShadowClass: 'drop-shadow-pink-500',
  },
};

export const mainNavigation = [
  NAVIGATION[ROUTES.PROFILE],
  NAVIGATION[ROUTES.QUESTS],
  NAVIGATION[ROUTES.ACADEMY],
  NAVIGATION[ROUTES.INVENTORY],
  NAVIGATION[ROUTES.LEADERBOARD],
  NAVIGATION[ROUTES.SETTINGS],
];

export const bottomNavigation = [
  NAVIGATION[ROUTES.ACADEMY],
  NAVIGATION[ROUTES.KINGDOM],
  NAVIGATION[ROUTES.QUESTS],
  NAVIGATION[ROUTES.LEADERBOARD],
  NAVIGATION[ROUTES.PROFILE],
];
