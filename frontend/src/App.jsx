import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Login from './pages/Login.jsx';
import Page404 from './pages/Page404.jsx';
import ProtectedRoutes from './utils/ProtectedRoutes.jsx';
import Chat from './pages/Chat.jsx';
import SignupForm from './pages/Signup.jsx';
import { linkRoutes } from './utils/routes.js';
import { logout } from './store/slices/authSlice.js';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleTokenCheck = (event) => {
      if (event.key === 'token') {
        dispatch(logout());
      }
    };
    window.addEventListener('storage', handleTokenCheck);

    return () => {
      window.removeEventListener('storage', handleTokenCheck);
    };
  }, [dispatch]);

  return (
    <div className="d-flex flex-column h-100">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={linkRoutes.login} element={<Login />} />
          <Route path={linkRoutes.signup} element={<SignupForm />} />
          <Route element={<ProtectedRoutes />}>
            <Route path={linkRoutes.main} element={<Chat />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
