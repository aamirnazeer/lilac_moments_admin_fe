import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/authSlice.ts';
import { useDispatch } from 'react-redux';
import toastSlice from './slice/toastSlice.ts';
import appSlice from './slice/appSlice.ts';

const store = configureStore({
  reducer: {
    authSlice,
    toastSlice,
    appSlice,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
