import { combineReducers } from '@reduxjs/toolkit';

import appApi from 'store/appApi';

import { userSlice } from 'store/user/userSlice';
import { questsSlice } from 'store/quests/questsSlice';
import { modalSlice } from './modalWindows/modalWindows';
import { leaderboardSlice } from './leaderboard/leaderboardSlice';

const rootReducer = combineReducers({
  [appApi.reducerPath]: appApi.reducer,

  [userSlice.name]: userSlice.reducer,
  [questsSlice.name]: questsSlice.reducer,
  [leaderboardSlice.name]: leaderboardSlice.reducer,
  [modalSlice.name]: modalSlice.reducer,
});

export default rootReducer;
