import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import App from './components/App';
import resources from './locales/index.js';
import { Provider } from 'react-redux';
import store from './store/index.js';
import { io } from 'socket.io-client';
import { addMessage, removeMessageByChannelId } from './store/slices/messagesSlice.js';
import { addChannel, removeChannel, renameChannel } from './store/slices/channelsSlice.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const i18n = i18next.createInstance();

const init = async () => {
  const socket = io();

  socket.on('newMessage', (payload) => {
    store.dispatch(addMessage(payload));
  });

  socket.on('newChannel', (payload) => {
    store.dispatch(addChannel(payload));
    toast.success(i18next.t('notifications.success.channelCreated'));
  });

  socket.on('removeChannel', (payload) => {
    store.dispatch(removeChannel(payload));
    store.dispatch(removeMessageByChannelId(payload));
    toast.success(i18next.t('notifications.success.channelRemoved'));
  });

  socket.on('renameChannel', (payload) => {
    store.dispatch(renameChannel(payload));
    toast.success(i18next.t('notifications.success.channelRenamed'));
  });

  const state = store.getState();
  const currentLanguage = state.language.currentLanguage;

  await i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'ru',
    lng: currentLanguage,
  });

  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
        <ToastContainer />
      </I18nextProvider>
    </Provider>
  );
};

export default init;
