import { HttpResponse, delay, http } from 'msw';
import { getQuestById, getQuests } from 'mocks/db/quests';
import { BASE_API_URL } from 'constants/env';
import { getQuestsTask } from 'mocks/db/questsTask';

export const questsHandlers = [
  // Handler for fetching all quests with delay
  http.get(`${BASE_API_URL}/quests`, async () => {
    const quests = getQuests();

    await delay();

    return HttpResponse.json({ quests });
  }),

  http.get(`${BASE_API_URL}/tasks`, async () => {
    const tasks = getQuestsTask();

    await delay();

    return HttpResponse.json({ tasks });
  }),

  // Handler for fetching a single quest by ID with delay
  http.get(`${BASE_API_URL}/quests/:questId`, async ({ params }) => {
    const { questId } = params;
    const quest = getQuestById(questId as string);

    await delay();

    if (!quest) {
      return HttpResponse.json(null, { status: 404 });
    }

    return HttpResponse.json(quest);
  }),
];
