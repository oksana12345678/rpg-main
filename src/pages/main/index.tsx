import { RouteObject } from 'react-router-dom';

import MainPage from './MainPage';
import { ROUTES } from 'constants/routes';

export const mainRoute: RouteObject = {
  path: ROUTES.MAIN,
  element: <MainPage />,
};
