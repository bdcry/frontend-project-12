import { createSlice } from '@reduxjs/toolkit';

const getInitialState = () => {
  const localToken = localStorage.getItem('token');
  return localToken
    ? { token: localToken, isLoggedIn: true }
    : { token: null, isLoggedIn: false };
};

const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialState(),
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = true;
      localStorage.setItem('token', state.token);
    },
  },
});

export const { loginSuccess } = authSlice.actions;
export default authSlice.reducer;
