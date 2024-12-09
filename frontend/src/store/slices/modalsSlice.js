import { createSlice } from "@reduxjs/toolkit";

const modalsSlice = createSlice({
  name: 'modals',
  initialState: { addChannelModal: false },
  reducers: {
    setStatusChannelModal: (state, action) => {
      state.addChannelModal = action.payload;
    },
  },
});

export default modalsSlice.reducer;
export const { setStatusChannelModal } = modalsSlice.actions;