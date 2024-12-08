import appApi from 'store/appApi';
import { Quest } from 'types/quest';
import { GetAllQuestsResponse } from 'types/api';

const questsApi = appApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getAllQuests: query<GetAllQuestsResponse, object>({
      query: () => '/quests',
    }),

    getQuestById: query<Quest, string>({
      query: (questId) => `/quests/${questId}`,
    }),
  }),
});

export const { useGetAllQuestsQuery, useGetQuestByIdQuery } = questsApi;
export default questsApi;
