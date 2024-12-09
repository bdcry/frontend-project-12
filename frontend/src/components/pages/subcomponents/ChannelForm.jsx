import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setStatusChannelModal } from '../../../store/slices/modalsSlice';
import { useFormik } from 'formik';
import addChannelSchema from '../../../utils/validation/validationForm';

const ChannelForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: addChannelSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  const dispatch = useDispatch();
  return (
    <Form onSubmit={formik.handleSubmit}>
      <Form.Group>
        <Form.Control
          name="name"
          id="name"
          className="mb-2"
          onChange={formik.handleChange}
          value={formik.values.name}
          isInvalid={formik.errors.name && formik.touched.name}
        ></Form.Control>
        <label className="visually-hidden" htmlFor="name">
          Имя канала
        </label>
        {formik.errors.name && (
          <Form.Control.Feedback type='invalid'>
            {formik.errors.name}
          </Form.Control.Feedback>
        )}
        {/* <Form.Control.Feedback type="invalid">
          инвалид
        </Form.Control.Feedback> */}
        <div className="d-flex justify-content-end">
          <Button
            variant="secondary"
            className="me-2"
            onClick={() => dispatch(setStatusChannelModal(false))}
          >
            Отменить
          </Button>
          <Button type="submit">Отправить</Button>
        </div>
      </Form.Group>
    </Form>
  );
};

export default ChannelForm;
