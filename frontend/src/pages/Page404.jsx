import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NotFound from '../assets/404-D_FLHmTM.svg';
import { linkRoutes } from '../utils/routes';

const Page404 = () => {
  const { t } = useTranslation();

  return (
    <div className="d-flex flex-column h-100">
      <div className="text-center bg-light">
        <img
          alt={t('page404.title')}
          className="img-fluid h-25"
          src={NotFound}
        />
        <h1 className="h4 text-muted">{t('page404.title')}</h1>
        <p className="text-muted">
          {t('page404.description')}
          {' '}
          <Link to={linkRoutes.main}>
            {t('page404.link')}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Page404;
