import { createSlice } from '@reduxjs/toolkit';

const initialStatue = { width: 0 };

const appSlice = createSlice({
  initialState: initialStatue,
  name: 'appSlice',
  reducers: {
    setWidth: (state, { payload }) => {
      state.width = payload;
    },
  },
});
export const { setWidth } = appSlice.actions;
export default appSlice.reducer;
