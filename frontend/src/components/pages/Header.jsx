import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);

  const renderLogoutButton = () => {
    if (isLoggedIn) {
      return (
        <Button type="button" onClick={() => dispatch(logout(null))}>Выйти</Button>
      )
    }
  };

  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a href="/login" className="navbar-brand">
          Hexlet Chat
        </a>
        {renderLogoutButton()}
      </div>
    </nav>
  );
};

export default Header;