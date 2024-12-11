import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import avatar from '../../assets/avatar_1-D7Cot-zE.jpg';
import { useFormik } from 'formik';
import { signupSchema } from '../../utils/validation/validationForm';
import { signupUser } from '../../store/slices/authSlice';

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: signupSchema(),
    onSubmit: async (values, { setFieldError }) => {
      console.log(values);
      const { username, password } = values;
      const resultAction = await dispatch(signupUser({ username, password }));

      if (signupUser.fulfilled.type === resultAction.type) {
        navigate('/');
      }
  
      if (signupUser.rejected.type === resultAction.type && resultAction.error.message.includes('409')) {
        setFieldError('username', 'Такой пользователь уже существует');
      }
    },
  });

  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-content-center h-100">
        <Col className="col-12 col-md-8 col-xxl-6">
          <Card className="shadow-sm">
            <Card.Body className="d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
              <Col className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src={avatar} alt="Войти" className="rounded-circle" />
              </Col>
              <Form className="w-50" onSubmit={formik.handleSubmit}>
                <h1 className="text-center mb-4">Регистрация</h1>
                <Form.Group className="form-floating mb-3" controlId="username">
                  <Form.Control
                    className="form-control"
                    type="text"
                    placeholder="Имя пользователя"
                    name="username"
                    autoComplete="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    isInvalid={formik.errors.username && formik.touched.username}
                    onBlur={formik.handleBlur}
                    required
                    autoFocus
                  ></Form.Control>
                  <Form.Label>Имя пользователя</Form.Label>
                  {formik.touched.username && formik.errors.username && (
                    <Form.Control.Feedback type="invalid" tooltip>
                      {formik.errors.username}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
                <Form.Group className="form-floating mb-3" controlId="password">
                  <Form.Control
                    className="form-control"
                    type="password"
                    placeholder="Пароль"
                    name="password"
                    autoComplete="new-password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    isInvalid={formik.errors.password && formik.touched.password}
                    onBlur={formik.handleBlur}
                    required
                  ></Form.Control>
                  <Form.Label>Пароль</Form.Label>
                  {formik.errors.password && (
                    <Form.Control.Feedback type="invalid" tooltip>
                      {formik.errors.password}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
                <Form.Group
                  className="form-floating mb-3"
                  controlId="confirmPassword"
                >
                  <Form.Control
                    className="form-control"
                    type="password"
                    placeholder="Пароль"
                    name="confirmPassword"
                    autoComplete="new-password"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                    isInvalid={formik.errors.confirmPassword && formik.touched.confirmPassword}
                    onBlur={formik.handleBlur}
                    required
                  ></Form.Control>
                  <Form.Label>Повторите пароль</Form.Label>
                  {formik.errors.confirmPassword && (
                    <Form.Control.Feedback type="invalid" tooltip>
                      {formik.errors.confirmPassword}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>
                <Button
                  type="submit"
                  variant="outline-primary"
                  className="w-100 mb-3 btn"
                >
                  Зарегистрироваться
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupForm;
