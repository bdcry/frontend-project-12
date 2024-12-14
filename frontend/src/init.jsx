import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import { io } from 'socket.io-client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import leoProfanity from 'leo-profanity';
import { ErrorBoundary } from '@rollbar/react';
import store from './store/index.js';
import resources from './locales/index.js';
import App from './components/App';
import { addMessage, removeMessageByChannelId } from './store/slices/messagesSlice.js';
import { addChannel, removeChannel, renameChannel } from './store/slices/channelsSlice.js';

export const i18n = i18next.createInstance();

const init = async () => {
  const socket = io();

  const rollbarConfig = {
    accessToken: import.meta.env.VITE_ROLLBAR_ACCESS_TOKEN,
    environment: import.meta.env.MODE,
  };

  socket.on('newMessage', (payload) => {
    store.dispatch(addMessage(payload));
  });

  socket.on('newChannel', (payload) => {
    store.dispatch(addChannel(payload));
    toast.success(i18n.t('notifications.success.channelCreated'));
  });

  socket.on('removeChannel', (payload) => {
    store.dispatch(removeChannel(payload));
    store.dispatch(removeMessageByChannelId(payload));
    toast.success(i18n.t('notifications.success.channelRemoved'));
  });

  socket.on('renameChannel', (payload) => {
    store.dispatch(renameChannel(payload));
    toast.success(i18n.t('notifications.success.channelRenamed'));
  });

  const russianWords = leoProfanity.getDictionary('ru');
  const englishWords = leoProfanity.getDictionary('en');
  const combinedWords = [...russianWords, ...englishWords];
  leoProfanity.addDictionary('multiLang', combinedWords);
  leoProfanity.loadDictionary('multiLang');

  const state = store.getState();
  const currentLanguage = state.language.currentLanguage;

  await i18n.use(initReactI18next).init({
    resources,
    fallbackLng: 'ru',
    lng: currentLanguage,
  });

  return (
    <ErrorBoundary config={rollbarConfig}>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <App />
          <ToastContainer />
        </I18nextProvider>
      </Provider>
    </ErrorBoundary>
  );
};

export default init;
