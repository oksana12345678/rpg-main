import { RouteObject } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import QuestsTaskPage from './QuestsTaskPage';

export const questTaskRoute: RouteObject = {
  path: ROUTES.QUESTS_TASK,
  element: <QuestsTaskPage />,
};
