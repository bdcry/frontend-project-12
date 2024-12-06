import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchmessagesByToken = createAsyncThunk(
  'messages/fetchmessagesByToken',
  async (token) => {
    const response = await axios.get('/api/v1/messages', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
);

const messagesSlice = createSlice({
  name: 'messages',
  initialState: { messagesData: [], loadingStatus: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchmessagesByToken.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(fetchmessagesByToken.fulfilled, (state, { payload }) => {
        state.messagesData = payload;
        state.loadingStatus = 'idle';
        state.error = null;
      })
      .addCase(fetchmessagesByToken.rejected, (state, action) => {
        state.loadingStatus = 'rejected';
        state.error = action.error;
      });
  },
});

export default messagesSlice.reducer;
