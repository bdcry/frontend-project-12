import { createSlice } from '@reduxjs/toolkit';

const modalsSlice = createSlice({
  name: 'ui',
  initialState: {
    modals: {
      addChannelModal: false,
      removeChannelModal: false,
      renameChannelModal: false,
      activeChannelId: null,
    },
  },
  reducers: {
    setStatusChannelModal: (state, { payload }) => {
      const { modalName, status, channelId } = payload;
      state.modals[modalName] = status;
      state.modals.activeChannelId = channelId;
    },
  },
});

export default modalsSlice.reducer;
export const { setStatusChannelModal } = modalsSlice.actions;
