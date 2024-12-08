import { RouteObject } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import QuestsPage from './QuestsPage';

export const questsRoute: RouteObject = {
  path: ROUTES.QUESTS,
  element: <QuestsPage />,
};
