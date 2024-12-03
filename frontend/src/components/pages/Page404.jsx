import { Link } from 'react-router-dom';
import NotFound from '../../assets/404-D_FLHmTM.svg';

const Page404 = () => {
  return (
    <div className="d-flex flex-column h-100">
      <div className="text-center bg-light">
        <img
          alt="Страница не найдена"
          className="img-fluid h-25"
          src={NotFound}
        />
        <h1 className="h4 text-muted">Страница не найдена</h1>
        <p className="text-muted">
          Но вы можете перейти <Link to="/">на главную страницу</Link>
        </p>
      </div>
    </div>
  );
};

export default Page404;
