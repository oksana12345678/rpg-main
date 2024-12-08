import { RouteObject } from 'react-router-dom';

import ProfilePage from './ProfilePage';
import { ROUTES } from 'constants/routes';

export const profileRoute: RouteObject = {
  path: ROUTES.PROFILE,
  element: <ProfilePage />,
};
