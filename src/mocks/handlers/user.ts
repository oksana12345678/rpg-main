import { HttpResponse, delay, http } from 'msw';
import { getUser, createUser, deleteUser, updateUser } from 'mocks/db/user';
import { getUserFromInitData } from 'mocks/utils';
import { RegisterUserRequest, UpdateUserRequest } from 'types/api';
import { BASE_API_URL } from 'constants/env';

export const userHandlers = [
  http.get(`${BASE_API_URL}/user`, async () => {
    const user = getUser();

    await delay();

    if (!user) {
      return HttpResponse.json(null, { status: 401 });
    }
    return HttpResponse.json({ user });
  }),

  http.post<object, RegisterUserRequest>(`${BASE_API_URL}/user`, async ({ request }) => {
    const authorizationHeader = request.headers.get('Authorization');
    const userInitData = getUserFromInitData(authorizationHeader || '');
    const requestBody = await request.json();
    const createdUser = createUser(userInitData, requestBody.role);

    await delay();

    return HttpResponse.json({ user: createdUser }, { status: 201 });
  }),

  http.patch<object, UpdateUserRequest>(`${BASE_API_URL}/user`, async ({ request }) => {
    const requestBody = await request.json();

    const updatedUserData = {
      coins: requestBody.coins,
      userClass: requestBody.userClass,
      userQuests: requestBody.userQuests,
      points: requestBody.points,
      level: requestBody.level,
    };

    const updatedUser = updateUser({
      coins: updatedUserData.coins,
      userClass: updatedUserData.userClass,
      userQuests: updatedUserData.userQuests,
      points: updatedUserData.points,
      level: updatedUserData.level,
    });

    await delay();

    return HttpResponse.json({ user: updatedUser }, { status: 200 });
  }),

  // DELETE /user/:userId handler
  http.delete(`${BASE_API_URL}/user/:userId`, async (req) => {
    // Extract the userId from the URL params
    const { request } = req;
    const { userId } = req.params;
    // Extract Authorization header
    const authorizationHeader = request.headers.get('Authorization');

    // Convert userId from string to number
    const parsedUserId = Number(userId);

    // Get user initialization data from token (or fail)
    const userInitData = getUserFromInitData(authorizationHeader || '');
    if (!userInitData || userInitData.id !== parsedUserId) {
      return HttpResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    // Find the user in your DB or localStorage by userId
    const userDB = getUser();
    if (!userDB) {
      return HttpResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Simulate delay for async behavior (optional)
    await delay();

    // Perform the user deletion (from mock database or localStorage)
    deleteUser();

    // Return success response
    return HttpResponse.json({ message: 'User deleted successfully' }, { status: 200 });
  }),
];
