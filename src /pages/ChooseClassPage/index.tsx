import { RouteObject } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import QuestChooseClanPage from './ChooseClassPage';

export const questChooseClanRoute: RouteObject = {
  path: ROUTES.CHOOSE_CLASS,
  element: <QuestChooseClanPage />,
};
