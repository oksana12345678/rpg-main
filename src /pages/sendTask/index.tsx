import { RouteObject } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import SendTask from './SendTask';

export const sendTaskRoute: RouteObject = {
  path: ROUTES.SEND_TASK,
  element: <SendTask />,
};
