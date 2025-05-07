import { RouteObject } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import QuestDetailsPageV2 from './QuestDetailsPageV2';

export const questDetailsRoute: RouteObject = {
  path: ROUTES.QUEST_DETAILS,
  element: <QuestDetailsPageV2 />,
};
