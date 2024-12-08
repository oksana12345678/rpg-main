import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import questsApi from 'store/quests/questsApi';
import { Quest, QuestsTask } from 'types/quest';

type InitialState = {
  quests: Quest[];
  selectedQuest: Quest | null;
  questDetailsId: string | number;
  questStatus: string;
  tasks: QuestsTask[];
};

const initialState: InitialState = {
  quests: [],
  tasks: [],
  selectedQuest: null,
  questDetailsId: '',
  questStatus: '',
};

export const questsSlice = createSlice({
  name: 'quests',
  initialState,
  reducers: {
    setQuestDetailsId: (state, action: PayloadAction<string | number>) => {
      state.questDetailsId = action.payload;
    },
    setQuestStatus: (state, action: PayloadAction<string>) => {
      state.questStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(questsApi.endpoints.getAllQuests.matchFulfilled, (state, action) => {
      state.quests = action.payload.quests;
    });
    builder.addMatcher(questsApi.endpoints.getQuestById.matchFulfilled, (state, action) => {
      state.selectedQuest = action.payload;
    });
    builder.addMatcher(questsApi.endpoints.getQuestsTask.matchFulfilled, (state, action) => {
      state.tasks = action.payload.tasks;
    });
  },
});

const questsActions = questsSlice.actions;

export default questsActions;
