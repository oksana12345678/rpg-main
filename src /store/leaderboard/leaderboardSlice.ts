import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GetLeaderboardDataRequest } from 'types/api';

type InitialState = {
  filters: GetLeaderboardDataRequest;
};

const initialState: InitialState = {
  filters: {
    timeType: 'week',
    timeCount: 1,
  },
};

export const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    updateFilters(state, action: PayloadAction<Partial<GetLeaderboardDataRequest>>) {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

const leaderboardAction = leaderboardSlice.actions;

export default leaderboardAction;
