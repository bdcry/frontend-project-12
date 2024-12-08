import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_API_URL } from '../../utils/routes';

export const fetchMessagesByToken = createAsyncThunk(
  'messages/fetchMessagesByToken',
  async (token) => {
    const response = await axios.get(`${BASE_API_URL}/messages`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

export const sendMessagesByToken = createAsyncThunk(
  'messages/sendMessagesByToken',
  async ({ token, newMessage }) => {
    const response = await axios.post(`${BASE_API_URL}/messages`, newMessage, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
)

const messagesSlice = createSlice({
  name: 'messages',
  initialState: { messagesData: [], loadingStatus: 'idle', error: null },
  reducers: {
    addMessage: (state, action) => {
      state.messagesData.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
    // Получение сообщений
      .addCase(fetchMessagesByToken.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(fetchMessagesByToken.fulfilled, (state, { payload }) => {
        state.messagesData = payload;
        state.loadingStatus = 'idle';
        state.error = null;
      })
      .addCase(fetchMessagesByToken.rejected, (state, action) => {
        state.loadingStatus = 'rejected';
        state.error = action.error;
      })
    // Отправка сообщений
    .addCase(sendMessagesByToken.pending, (state) => {
      state.loadingStatus = 'loading';
      state.error = null;
    })
    .addCase(sendMessagesByToken.fulfilled, (state) => {
      state.loadingStatus = 'idle';
      state.error = null;
    })
    .addCase(sendMessagesByToken.rejected, (state, action) => {
      state.loadingStatus = 'rejected';
      state.error = action.error;
    })
  },
});

export default messagesSlice.reducer;
export const { addMessage } = messagesSlice.actions;