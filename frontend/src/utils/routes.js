import { toast } from "react-toastify";
import { i18n } from "../init";

export const BASE_API_URL = '/api/v1';

export const handleApiError = (error, t) => {
  if (error.code === 'ERR_NETWORK') {
    toast.error(t ? t('notifications.error.network') : i18n.t('notifications.error.network'));
  } else {
    toast.error(t ? t('notifications.error.somethingWrong') : i18n.t('notifications.error.somethingWrong'));
  }
};