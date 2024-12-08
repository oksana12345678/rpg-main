import appApi from 'store/appApi';
import { Quest } from 'types/quest';
import { GetAllQuestsResponse, GetQuestsTaskResponse } from 'types/api';

const questsApi = appApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getAllQuests: query<GetAllQuestsResponse, object>({
      query: () => '/quests',
    }),

    getQuestsTask: query<GetQuestsTaskResponse, object>({
      query: () => '/tasks',
    }),

    getQuestById: query<Quest, string>({
      query: (questId) => `/quests/${questId}`,
    }),
  }),
});

export const { useGetAllQuestsQuery, useGetQuestByIdQuery } = questsApi;
export default questsApi;
