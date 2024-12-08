import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import userApi from 'store/user/userApi';
import { User } from 'types/user';

type InitialState = {
  user: User | null;
  initDataRaw: string;
};

const initialState: InitialState = {
  user: null,
  initDataRaw: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
    setInitDataRaw(state, action: PayloadAction<string>) {
      state.initDataRaw = action.payload;
    },
    //TODO example to use
    addCoins(state, action: PayloadAction<number>) {
      if (state.user) {
        state.user.coins = state.user.coins + action.payload;
      }
    },
    addLevel(state, action: PayloadAction<number>) {
      if (state.user) {
        state.user.level = action.payload;
      }
    },
    addPoints(state, action: PayloadAction<number>) {
      if (state.user) {
        state.user.points = state.user.points + action.payload;
      }
    },
    //TODO example to use
    setChooseClass: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.userClass = action.payload;
      }
    },
    setQuestStatus: (state, action: PayloadAction<{ name: string; status: string }>) => {
      if (state.user) {
        const quest = state.user.activeQuests.find((q) => q.quest.name === action.payload.name);
        if (quest) {
          quest.status = action.payload.status;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.getUserAccount.matchFulfilled, (state, action) => {
      state.user = action.payload.user;
    });
    builder.addMatcher(userApi.endpoints.createUserAccount.matchFulfilled, (state, action) => {
      state.user = action.payload.user;
    });
    builder.addMatcher(userApi.endpoints.updateUserAccount.matchFulfilled, (state, action) => {
      state.user = action.payload.user;
    });

    // Handle deleteUserAccount mutation fulfillment
    builder.addMatcher(userApi.endpoints.deleteUserAccount.matchFulfilled, (state) => {
      state.user = null;
      state.initDataRaw = '';
    });
  },
});

const userActions = userSlice.actions;

export default userActions;
