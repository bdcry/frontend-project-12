import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_API_URL } from '../../utils/routes';
import axios from 'axios';

export const fetchChannelsByToken = createAsyncThunk(
  'channels/fetchChannelsByToken',
  async (token) => {
    const response = await axios.get(`${BASE_API_URL}/channels`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

export const createChannelsByToken = createAsyncThunk(
  'messages/createChannelsByToken',
  async ({ token, newChannel }) => {
    const response = await axios.post(`${BASE_API_URL}/channels`, newChannel, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
)

const channelsSlice = createSlice({
  name: 'channels',
  initialState: { channelsData: [], activeChannelId: '1', loadingStatus: 'idle', error: null },
  reducers: {
    selectActiveTab: (state, action) => {
      state.activeChannelId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Получение каналов
      .addCase(fetchChannelsByToken.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(fetchChannelsByToken.fulfilled, (state, { payload }) => {
        state.channelsData = payload;
        state.loadingStatus = 'idle';
        state.error = null;
      })
      .addCase(fetchChannelsByToken.rejected, (state, action) => {
        state.loadingStatus = 'rejected';
        state.error = action.error;
      })
      // Добавление каналов
      .addCase(createChannelsByToken.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(createChannelsByToken.fulfilled, (state, { payload }) => {
        state.channelsData.push({ id: payload.id, name: payload.name, removable: payload.removable });
        state.activeChannelId = payload.id;
        state.loadingStatus = 'idle';
        state.error = null;
      })
      .addCase(createChannelsByToken.rejected, (state, action) => {
        state.loadingStatus = 'rejected';
        state.error = action.error;
      })
  },
});

export default channelsSlice.reducer;
export const { selectActiveTab } = channelsSlice.actions;