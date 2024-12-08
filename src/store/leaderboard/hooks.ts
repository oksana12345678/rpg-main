import { useStableArray } from 'utils/useStableArray';
import leaderboardApi from './leaderboardApi';
import { useAppSelector } from 'store/hooks';

export const useGetLeadeboardData = (options?: RTKRequestOptions) => {
  const filters = useAppSelector((store) => store.leaderboard.filters);
  const { data, ...rest } = leaderboardApi.useGetLeaderboardDataQuery(filters, options);
  const users = useStableArray(data?.users);
  const currentUser = data?.currentUser;
  return { users, currentUser, ...rest };
};
