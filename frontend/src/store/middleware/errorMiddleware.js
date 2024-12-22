import handleApiError from '../../utils/errorHandler';
import { logout } from '../slices/authSlice';

const errorMiddleware = (store) => (next) => (action) => {
  if (action.error) {
    handleApiError(action.error);
    if (action.error?.message.includes('401')) {
      store.dispatch(logout());
    }
  }
  next(action);
};

export default errorMiddleware;
