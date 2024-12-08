import appApi from 'store/appApi';
import {
  LoginUserResponse,
  RegisterUserRequest,
  RegisterUserResponse,
  UpdateUserRequest,
} from 'types/api';

const userApi = appApi.injectEndpoints({
  endpoints: ({ query, mutation }) => ({
    getUserAccount: query<LoginUserResponse, void>({
      query: () => '/user',
    }),

    createUserAccount: mutation<RegisterUserResponse, RegisterUserRequest>({
      query: (body) => ({
        url: '/user',
        method: 'POST',
        body,
      }),
    }),

    updateUserAccount: mutation<RegisterUserResponse, UpdateUserRequest>({
      query: (body) => ({
        url: '/user',
        method: 'PATCH',
        body,
      }),
    }),

    deleteUserAccount: mutation<void, number | string>({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export default userApi;
