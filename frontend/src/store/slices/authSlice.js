/* eslint-disable consistent-return */
/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiPath } from '../../utils/routes';

const getInitialState = () => {
  const localToken = localStorage.getItem('token');
  const localUser = localStorage.getItem('user');
  return localToken
    ? { token: localToken, isLoggedIn: true, username: localUser }
    : { token: null, isLoggedIn: false, username: null };
};

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async ({ username, password }) => {
    const response = await axios.post(apiPath.signupPath(), { username, password });
    return response.data;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialState(),
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.isLoggedIn = true;
      localStorage.setItem('token', state.token);
      localStorage.setItem('user', state.username);
    },
    logout: (state, action) => {
      state.token = action.payload;
      state.username = action.payload;
      state.isLoggedIn = false;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.username = payload.username;
        state.isLoggedIn = true;
        localStorage.setItem('token', state.token);
        localStorage.setItem('user', state.username);
        state.loadingStatus = 'idle';
        state.error = null;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loadingStatus = 'rejected';
        state.error = action.error;
      });
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
