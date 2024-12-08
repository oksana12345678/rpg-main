import { RouteObject } from 'react-router-dom';

import { ROUTES } from 'constants/routes';
import { NAVIGATION } from 'configs/navigation';
import InDevelopingPage from 'pages/InDevelopingPage';

export const inventoryRoute: RouteObject = {
  path: ROUTES.INVENTORY,
  element: <InDevelopingPage pageName={NAVIGATION[ROUTES.INVENTORY].label} />,
};
