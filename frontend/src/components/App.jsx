import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx'
import Page404 from './pages/Page404.jsx';
import ProtectedRoutes from '../utils/ProtectedRoutes.jsx';

const App = () => {
  return (
    <div className='d-flex flex-column h-100'>
      <nav className='shadow-sm navbar navbar-expand-lg navbar-light bg-white'>
        <div className="container">
          <a href="/login" className='navbar-brand'>Hexlet Chat</a>
        </div>
      </nav>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<Login />} />
          </Route>
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
