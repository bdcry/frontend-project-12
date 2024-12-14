import { toast } from 'react-toastify';
import { getTranslator } from './translator';

export const BASE_API_URL = '/api/v1';

export const handleApiError = (error) => {
  const t = getTranslator();
  if (error.code === 'ERR_NETWORK') {
    toast.error(t('notifications.error.network'));
  } else {
    toast.error(t('notifications.error.somethingWrong'));
  }
};
