import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slice/authSlice.ts';
import { useDispatch } from 'react-redux';
import toastSlice from './slice/toastSlice.ts';

const store = configureStore({
  reducer: {
    authSlice,
    toastSlice,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
