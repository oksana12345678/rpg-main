import { RouteObject } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import QuestCompletePage from './QuestCompletedPage';

export const completeQuestRoute: RouteObject = {
  path: ROUTES.COMPLETED_QUEST,
  element: <QuestCompletePage />,
};
