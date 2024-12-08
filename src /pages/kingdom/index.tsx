import { RouteObject } from 'react-router-dom';

import { ROUTES } from 'constants/routes';
import { NAVIGATION } from 'configs/navigation';
import InDevelopingPage from 'pages/InDevelopingPage';

export const kingdomRoute: RouteObject = {
  path: ROUTES.KINGDOM,
  element: <InDevelopingPage pageName={NAVIGATION[ROUTES.KINGDOM].label} />,
};
