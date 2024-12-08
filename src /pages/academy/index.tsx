import { RouteObject } from 'react-router-dom';

import { ROUTES } from 'constants/routes';
import AcademyPage from './AcademyPage';

export const academyRoute: RouteObject = {
  path: ROUTES.ACADEMY,
  element: <AcademyPage />,
};
