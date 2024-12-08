import { createBrowserRouter } from 'react-router-dom';

import LayoutWithBottomNavigation from 'components/Layouts/LayoutWithBottomNavigation';

import RootPage from 'pages/RootPage';
import ErrorPage from 'pages/ErrorPage';
import NotFoundPage from 'pages/NotFoundPage';

import { registerRoute } from 'pages/register';
import { mainRoute } from 'pages/main';
import { profileRoute } from 'pages/profile';
import { questsRoute } from 'pages/quests';
import { questDetailsRoute } from 'pages/questDetails';
import { questChooseClanRoute } from '../pages/ChooseClassPage';
import { academyRoute } from 'pages/academy';
import { inventoryRoute } from 'pages/inventory';
import { kingdomRoute } from 'pages/kingdom';
import { leaderboardRoute } from 'pages/leaderboard';
import { settingsRoute } from 'pages/settings';
import { completeQuestRoute } from 'pages/completedQuest';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <LayoutWithBottomNavigation />,
        children: [
          profileRoute,
          questsRoute,
          academyRoute,
          inventoryRoute,
          kingdomRoute,
          leaderboardRoute,
        ],
      },
      settingsRoute,
      questDetailsRoute,
      registerRoute,
      mainRoute,
      questChooseClanRoute,
      completeQuestRoute,
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default routes;
