import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './rootReducer';
import appApi from './appApi';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(appApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type AppRootState = ReturnType<typeof store.getState>;
