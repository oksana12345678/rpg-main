import { createSlice } from '@reduxjs/toolkit';

// reducers/modalWindows/modalSlice.js

type InitialState = {
  modalChooseClass: boolean;
  selectedSkills: string[];
  successModalOpen: boolean;
  errorModalOpen: boolean;
};

const initialState: InitialState = {
  modalChooseClass: false,
  selectedSkills: [],
  successModalOpen: false,
  errorModalOpen: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalChooseClass(state) {
      state.modalChooseClass = true;
    },

    setSuccessModalOpen(state) {
      state.successModalOpen = true;
      state.errorModalOpen = false;
    },
    setErrorModalOpen(state) {
      state.errorModalOpen = true;
      state.successModalOpen = false;
    },
    setCloseModal(state) {
      state.successModalOpen = false;
      state.errorModalOpen = false;
      state.modalChooseClass = false;
    },
    setSelected(state, action) {
      state.selectedSkills = action.payload;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalActions;
