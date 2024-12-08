import { HttpResponse, delay, http } from 'msw';
import { BASE_API_URL } from 'constants/env';
import { generateLeaderboardData } from 'mocks/db/leaderboard';
import { TimeFilterType } from 'types/leaderboard';

export const leaderboardHandlers = [
  http.get(`${BASE_API_URL}/leaderboard`, async ({ request }) => {
    const params = new URLSearchParams(new URL(request.url).search);
    const timeType = params.get('timeType');
    const leaderboardData = generateLeaderboardData(timeType as TimeFilterType);
    if (leaderboardData) {
      await delay();
      return HttpResponse.json({ ...leaderboardData });
    }
  }),
];
