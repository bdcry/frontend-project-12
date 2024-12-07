import { createSlice } from '@reduxjs/toolkit';

const getInitialState = () => {
  const localToken = localStorage.getItem('token');
  const localUser = localStorage.getItem('user')
  return localToken
    ? { token: localToken, isLoggedIn: true, username: localUser }
    : { token: null, isLoggedIn: false, username: null };
};

const authSlice = createSlice({
  name: 'auth',
  initialState: getInitialState(),
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.isLoggedIn = true;
      localStorage.setItem('token', state.token);
      localStorage.setItem('user', state.username)
    },
    logout: (state, action) => {
      state.token = action.payload;
      state.username = action.payload;
      state.isLoggedIn = false;
      localStorage.clear();
    }
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;


// тестовое сообщение через форму отправки без использования websocket :)
