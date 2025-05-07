import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { SDKProvider } from '@telegram-apps/sdk-react';
import { RouterProvider } from 'react-router-dom';

import { store } from 'store/store';
import routes from 'configs/routes';
import { VITE_ENABLE_MSW } from 'constants/env';

import 'swiper/css';
import 'swiper/css/pagination';

import './index.css';

async function enableMocking() {
  if (VITE_ENABLE_MSW.toLowerCase() !== 'true') {
    return;
  }

  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mocks/browser');
    worker.start();
  }

  const { worker } = await import('./mocks/browser');
  return worker.start({
    onUnhandledRequest: 'bypass',
  });
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <SDKProvider>
        <Provider store={store}>
          <RouterProvider router={routes} />
        </Provider>
      </SDKProvider>
    </React.StrictMode>,
  );
});
