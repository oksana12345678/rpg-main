import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  modalChooseClass: boolean;
};

const initialState: InitialState = {
  modalChooseClass: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalChooseClass(state) {
      state.modalChooseClass = true;
    },
    setCloseModal(state) {
      state.modalChooseClass = false;
    },
  },
});

const modalActions = modalSlice.actions;

export default modalActions;
