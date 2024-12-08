import { useStableArray } from 'utils/useStableArray';
import questsApi from './questsApi';

export const useGetAllQuests = (options?: RTKRequestOptions) => {
  const { data, ...rest } = questsApi.useGetAllQuestsQuery({}, options);
  const quests = useStableArray(data?.quests);
  return { quests, ...rest };
};
