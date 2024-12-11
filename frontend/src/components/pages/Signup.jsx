import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import avatar from '../../assets/avatar_1-D7Cot-zE.jpg';

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Container fluid className="h-100">
      <Row className="justify-content-center align-content-center h-100">
        <Col className="col-12 col-md-8 col-xxl-6">
          <Card className="shadow-sm">
            <Card.Body className="d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
              <Col className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                <img src={avatar} alt="Войти" className="rounded-circle" />
              </Col>
              <Form className="w-50">
                <h1 className="text-center mb-4">Регистрация</h1>
                <Form.Group className="form-floating mb-3" controlId="username">
                  <Form.Control
                    className="form-control"
                    type="text"
                    placeholder="Имя пользователя"
                    name="username"
                    autoComplete="username"
                    required
                    // onChange={formik.handleChange}
                    // value={formik.values.username}
                    // isInvalid={formik.status}
                  ></Form.Control>
                  <Form.Label>Имя пользователя</Form.Label>
                  <Form.Control.Feedback
                    type="invalid"
                    className="d-block mb-3"
                    tooltip
                  >
                    инвалид
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-floating mb-3" controlId="password">
                  <Form.Control
                    className="form-control"
                    type="password"
                    placeholder="Пароль"
                    name="password"
                    autoComplete="new-password"
                    required
                    // onChange={formik.handleChange}
                    // value={formik.values.username}
                    // isInvalid={formik.status}
                  ></Form.Control>
                  <Form.Label>Пароль</Form.Label>
                  <Form.Control.Feedback
                    type="invalid"
                    className="d-block mb-3"
                    tooltip
                  >
                    инвалид
                  </Form.Control.Feedback>
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
                    required
                    // onChange={formik.handleChange}
                    // value={formik.values.username}
                    // isInvalid={formik.status}
                  ></Form.Control>
                  <Form.Label>Повторите пароль</Form.Label>
                  <Form.Control.Feedback
                    type="invalid"
                    className="d-block mb-3"
                    tooltip
                  >
                    инвалид
                  </Form.Control.Feedback>
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
