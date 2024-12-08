import { HttpResponse, delay, http } from 'msw';
import { BASE_API_URL } from 'constants/env';
import { getAvatars, getPreviewAvatars } from 'mocks/db/avatars';

export const avatarsHandlers = [
  http.get(`${BASE_API_URL}/avatars`, async () => {
    const avatars = getAvatars();
    await delay();
    return HttpResponse.json({ avatars });
  }),
  http.get(`${BASE_API_URL}/avatars/preview`, async () => {
    const avatars = getPreviewAvatars();
    await delay();
    return HttpResponse.json({ avatars });
  }),
];
