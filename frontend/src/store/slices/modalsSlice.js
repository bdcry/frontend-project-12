import { createSlice } from "@reduxjs/toolkit";

const modalsSlice = createSlice({
  name: 'ui',
  initialState: { modals: {  addChannelModal: false, removeChannelModal: false } },
  reducers: {
    setStatusChannelModal: (state, { payload }) => {
      const { modalName, status } = payload;
      state.modals[modalName] = status;
    },
  },
});

export default modalsSlice.reducer;
export const { setStatusChannelModal } = modalsSlice.actions;