import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../core/api.ts';
import { ENDPOINTS } from '../../core/endpoints.ts';

export const signInAction = createAsyncThunk(
  'POST.SIGN_IN',
  async (payload: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await api.post(ENDPOINTS.SIGN_IN, { username: payload.username, password: payload.password });
      const { data } = response;
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message as string);
    }
  }
);

export const currentUserAction = createAsyncThunk('GET.CURRENT_USER', async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(ENDPOINTS.CURRENT_USER);
    const { data } = response;
    return data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message as string);
  }
});

export const signOutAction = createAsyncThunk('POST.SIGN_OUT', async (_, { rejectWithValue }) => {
  try {
    await api.post(ENDPOINTS.SIGN_OUT);
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message as string);
  }
});
