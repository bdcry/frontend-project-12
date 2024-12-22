import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { changeLanguage } from '../store/slices/languageSlice';
import { linkRoutes } from '../utils/routes';

const Header = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const currentLanguage = useSelector(({ language }) => language.currentLanguage);

  const renderLogoutButton = () => {
    if (isLoggedIn) {
      return (
        <Button type="button" onClick={() => dispatch(logout())}>
          {t('header.logout')}
        </Button>
      );
    }
    return null;
  };

  const renderLanguageButtons = () => {
    const languages = [
      { label: 'Русский', code: 'ru' },
      { label: 'English', code: 'en' },
    ];

    const handleChangeLanguage = (lang) => {
      i18n.changeLanguage(lang);
      dispatch(changeLanguage(lang));
    };

    return (
      <div className="language-buttons me-2">
        {languages.map(({ label, code }) => (
          <Button
            key={code}
            type="button"
            variant={`${currentLanguage === code ? 'secondary' : 'outline-secondary'} mx-1`}
            onClick={() => handleChangeLanguage(code)}
          >
            {label}
          </Button>
        ))}
      </div>
    );
  };

  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-light bg-white">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <a href={linkRoutes.main} className="navbar-brand">
            {t('header.title')}
          </a>
        </div>
        <div className="d-flex align-items-center">
          {renderLanguageButtons()}
          {renderLogoutButton()}
        </div>
      </div>
    </nav>
  );
};

export default Header;
