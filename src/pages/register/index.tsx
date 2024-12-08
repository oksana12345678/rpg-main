import { RouteObject } from 'react-router-dom';

import RegisterPageV2 from './RegisterPageV2';
import { ROUTES } from 'constants/routes';

export const registerRoute: RouteObject = {
  path: ROUTES.REGISTER,
  element: <RegisterPageV2 />,
};
