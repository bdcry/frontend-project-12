import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice.js';
import channelsReducer from './slices/channelsSlice.js';
import messagesReducer from './slices/messagesSlice.js';
import modalsReducer from './slices/modalsSlice.js';
import languageReducer from './slices/languageSlice.js';
import errorMiddleware from './middleware/errorMiddleware.js';

export default configureStore({
  reducer: {
    auth: authReducer,
    channels: channelsReducer,
    messages: messagesReducer,
    ui: modalsReducer,
    language: languageReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([errorMiddleware]),
});
