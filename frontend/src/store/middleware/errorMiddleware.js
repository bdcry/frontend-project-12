import { logout } from '../slices/authSlice';

const errorMiddleware = (store) => (next) => (action) => {
  if (action.error?.message.includes('401')) {
    store.dispatch(logout());
  }
  next(action);
};

export default errorMiddleware;
