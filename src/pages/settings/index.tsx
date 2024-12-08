import { RouteObject } from 'react-router-dom';

import { ROUTES } from 'constants/routes';
import SettingsPage from './SettingsPage';

export const settingsRoute: RouteObject = {
  path: ROUTES.SETTINGS,
  element: <SettingsPage />,
};
