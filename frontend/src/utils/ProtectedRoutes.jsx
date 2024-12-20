import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { linkRoutes } from './routes';

const ProtectedRoutes = () => {
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to={linkRoutes.login} />;
};

export default ProtectedRoutes;
