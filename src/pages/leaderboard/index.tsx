import { RouteObject } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import LeaderboardPage from './Leaderboard';

export const leaderboardRoute: RouteObject = {
  path: ROUTES.LEADERBOARD,
  element: <LeaderboardPage />,
};
