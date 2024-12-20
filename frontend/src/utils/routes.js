import { toast } from 'react-toastify';
import { getTranslator } from './translator';

const BASE_API_URL = '/api/v1';

export const apiPath = {
  loginPath: () => `${BASE_API_URL}/login`,
  signupPath: () => `${BASE_API_URL}/signup`,
  messagesPath: () => `${BASE_API_URL}/messages`,
  channelsPath: () => `${BASE_API_URL}/channels`,
  channelPath: (id) => `${BASE_API_URL}/channels/${id}`,
};

export const handleApiError = (error) => {
  const t = getTranslator();
  if (error.code === 'ERR_NETWORK') {
    toast.error(t('notifications.error.network'));
  } else if (error.message.includes('409')) {
    toast.error(t('registration.errors.alredyRegistred'));
  } else {
    toast.error(t('notifications.error.somethingWrong'));
  }
};

export const linkRoutes = {
  login: '/login',
  signup: '/signup',
  main: '/',
};
