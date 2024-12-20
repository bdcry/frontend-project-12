import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/subcomponents/Header.jsx';
import Login from './pages/Login.jsx';
import Page404 from './pages/Page404.jsx';
import ProtectedRoutes from '../utils/ProtectedRoutes.jsx';
import Chat from './pages/Chat.jsx';
import SignupForm from './pages/Signup.jsx';
import { linkRoutes } from '../utils/routes.js';

const App = () => (
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

export default App;
