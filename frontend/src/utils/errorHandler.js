import { toast } from 'react-toastify';
import { getTranslator } from './translator';

const handleApiError = (error) => {
  const t = getTranslator();
  if (error.code === 'ERR_NETWORK') {
    toast.error(t('notifications.error.network'));
  } else if (error.message.includes('409')) {
    toast.error(t('registration.errors.alredyRegistred'));
  } else if (error.message.includes('401')) {
    toast.error(t('notifications.error.tokenExpired'));
  } else {
    toast.error(t('notifications.error.somethingWrong'));
  }
};

export default handleApiError;
