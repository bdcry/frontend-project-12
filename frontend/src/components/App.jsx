import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/pages-components/Header.jsx';
import Login from './pages/Login.jsx'
import Page404 from './pages/Page404.jsx';
import ProtectedRoutes from '../utils/ProtectedRoutes.jsx';
import Chat from './pages/Chat.jsx';

const App = () => {
  return (
    <div className='d-flex flex-column h-100'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/' element={<Chat />} />
          </Route>
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
