import { createSlice } from '@reduxjs/toolkit';

const initialStatue = { open: false, type: '', message: '' };

const toastSlice = createSlice({
  initialState: initialStatue,
  name: 'toastSlice',
  reducers: {
    resetToast: (state) => {
      state.open = false;
      state.type = '';
      state.message = '';
    },
    triggerToast: (state, { payload }) => {
      state.open = payload.open;
      state.type = payload.type;
      state.message = payload.message;
    },
  },
});
export const { resetToast, triggerToast } = toastSlice.actions;
export default toastSlice.reducer;
