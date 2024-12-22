import {
  Container, Row, Col, Card, Form, Button,
} from 'react-bootstrap';
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { loginSuccess } from '../store/slices/authSlice';
import avatar from '../assets/avatar-DIE1AEpS.jpg';
import { apiPath, linkRoutes } from '../utils/routes';
import handleApiError from '../utils/errorHandler';

const handleSubmit = async (values, navigate, setStatus, dispatch, t) => {
  try {
    const { data } = await axios.post(apiPath.loginPath(), {
      username: values.username,
      password: values.password,
    });
    const { token, username } = data;
    dispatch(loginSuccess({ token, username }));
    setStatus();
    navigate(linkRoutes.main);
  } catch (error) {
    if (error.code === 'ERR_NETWORK') {
      handleApiError(error, t);
    } else {
      setStatus(t('login.errors.wrongLogin'));
    }
  }
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: { username: '', password: '' },
    onSubmit: (values, { setStatus }) => handleSubmit(values, navigate, setStatus, dispatch, t),
  });

  return (
    <Container fluid className="h-100">
      <Row className="row justify-content-center align-content-center h-100">
        <Col className="col-12 col-md-8 col-xxl-6">
          <Card className="card shadow-sm">
            <Card.Body className="card-body row p-5">
              <Col className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img
                  src={avatar}
                  alt={t('login.title')}
                  className="rounded-circle"
                />
              </Col>
              <Form
                className="col-12 col-md-6 mt-3 mt-md-0"
                onSubmit={formik.handleSubmit}
              >
                <h1 className="text-center mb-4">{t('login.title')}</h1>
                <Form.Group className="form-floating mb-3" controlId="username">
                  <Form.Control
                    className="form-control"
                    type="text"
                    placeholder={t('login.placeholder_username')}
                    name="username"
                    autoComplete="username"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    isInvalid={formik.status}
                  />
                  <Form.Label>{t('login.placeholder_username')}</Form.Label>
                </Form.Group>
                <Form.Group className="form-floating mb-4" controlId="password">
                  <Form.Control
                    className="form-control"
                    type="password"
                    placeholder={t('login.placeholder_password')}
                    name="password"
                    autoComplete="current-password"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    isInvalid={formik.status}
                  />
                  <Form.Label>{t('login.placeholder_password')}</Form.Label>
                  {formik.status && (
                    <Form.Control.Feedback
                      type="invalid"
                      className="d-block mb-3"
                      tooltip
                    >
                      {formik.status}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
                <Button
                  type="submit"
                  variant="outline-primary"
                  className="w-100 mb-3 btn"
                >
                  {t('login.title')}
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="card-footer p-4">
              <div className="text-center">
                <span>{t('login.span')}</span>
                {' '}
                <a href={linkRoutes.signup}>{t('login.registration')}</a>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
