import appApi from 'store/appApi';
import { GetAvatarsResponse } from 'types/api';

const academyApi = appApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getAvatars: query<GetAvatarsResponse, object>({
      query: () => '/avatars',
    }),

    getPreviewAvatars: query<GetAvatarsResponse, object>({
      query: () => '/avatars/preview',
    }),
  }),
});

export default academyApi;
