import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusChannelModal } from '../../../store/slices/modalsSlice';
import { useFormik } from 'formik';
import createAddChannelSchema from '../../../utils/validation/validationForm';
import { createChannelsByToken } from '../../../store/slices/channelsSlice';

const ChannelForm = () => {
  const dispatch = useDispatch();
  const token = useSelector(({ auth  }) => auth.token);
  const channels = useSelector(({ channels }) => channels.channelsData);
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: createAddChannelSchema(channels),
    onSubmit: (values, { resetForm }) => {
      const newChannel = {
        name: values.name,
      }
      dispatch(createChannelsByToken({ token, newChannel }))
      dispatch(setStatusChannelModal(false));
      resetForm();
    },
  });
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
