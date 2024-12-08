import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../store/slices/authSlice';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);

  const renderLogoutButton = () => {
    if (isLoggedIn) {
      return (
        <Button type="button" onClick={() => dispatch(logout(null))}>
          Выйти
        </Button>
      );
    }
  };

  const renderChatLink = () => {
    if (isLoggedIn) {
      return (
        <a href='/' className='navbar-brand'>Чаты</a>
      );
    }
  };

  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a href="/login" className="navbar-brand">
          Hexlet Chat
        </a>
        {renderChatLink()}
        {renderLogoutButton()}
      </div>
    </nav>
  );
};

export default Header;
