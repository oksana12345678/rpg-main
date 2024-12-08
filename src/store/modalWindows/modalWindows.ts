import { createSlice } from '@reduxjs/toolkit';

// reducers/modalWindows/modalSlice.js

type InitialState = {
  modalChooseClass: boolean;

  successModalOpen: boolean;
  errorModalOpen: boolean;
};

const initialState: InitialState = {
  modalChooseClass: false,

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
  },
});

export const modalActions = modalSlice.actions;

export default modalActions;
