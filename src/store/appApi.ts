import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AppRootState } from './store';
import { BASE_API_URL } from 'constants/env';

const appApi = createApi({
  reducerPath: 'appAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_API_URL,
    prepareHeaders: (headers, { getState }) => {
      const initDataRaw = (getState() as AppRootState).user.initDataRaw;
      headers.set('Authorization', `tma ${initDataRaw}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
  refetchOnFocus: true,
});

export default appApi;
