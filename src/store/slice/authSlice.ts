import { createSlice } from '@reduxjs/toolkit';
import { currentUserAction, signInAction, signOutAction } from '../thunk/authThunk.ts';

const initialStatue = {
  loading: false,
  error: false,
  errorMessage: '',
  loggedIn: false,
  currentUser: {},
  currentUserLoading: false,
};

const authSlice = createSlice({
  initialState: initialStatue,
  name: 'authSlice',
  extraReducers: (builder) => {
    builder
      .addCase(signInAction.pending, (state) => {
        state.loading = true;
        state.errorMessage = '';
        state.error = false;
      })
      .addCase(signInAction.fulfilled, (state) => {
        state.loading = false;
        state.errorMessage = '';
        state.error = false;
        state.loggedIn = true;
      })
      .addCase(signInAction.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = payload as string;
        state.loggedIn = false;
      })
      .addCase(currentUserAction.pending, (state) => {
        state.currentUserLoading = true;
        state.errorMessage = '';
      })
      .addCase(currentUserAction.fulfilled, (state, { payload }) => {
        state.currentUserLoading = false;
        state.errorMessage = '';
        state.loggedIn = true;
        state.currentUser = payload.currentUser;
      })
      .addCase(currentUserAction.rejected, (state, { payload }) => {
        state.currentUserLoading = false;
        state.error = true;
        state.errorMessage = payload as string;
      })
      .addCase(signOutAction.fulfilled, (state) => {
        state.loggedIn = false;
      });
  },
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.error = false;
      state.errorMessage = '';
      state.loggedIn = false;
      state.currentUser = {};
    },
  },
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;
