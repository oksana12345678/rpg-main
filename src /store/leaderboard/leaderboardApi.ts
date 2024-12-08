import appApi from 'store/appApi';
import { GetLeaderboardDataRequest, GetLeaderboardDataResponse } from 'types/api';
import objectToQueryParams from 'utils/objectToQueryParams';

const leaderboardApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    getLeaderboardData: builder.query<GetLeaderboardDataResponse, GetLeaderboardDataRequest>({
      query: (request) => `/leaderboard?${objectToQueryParams(request)}`,
    }),
  }),
});

export default leaderboardApi;
