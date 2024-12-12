import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusChannelModal } from '../../../store/slices/modalsSlice';
import { useFormik } from 'formik';
import { channelSchema } from '../../../utils/validation/validationForm';
import { createChannelsByToken } from '../../../store/slices/channelsSlice';
import { useTranslation } from 'react-i18next';
import leoProfanity from 'leo-profanity';

const ChannelForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const token = useSelector(({ auth }) => auth.token);
  const channels = useSelector(({ channels }) => channels.channelsData);
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validationSchema: channelSchema(channels, t),
    onSubmit: (values, { resetForm }) => {
      const cleanChannelName = leoProfanity.clean(values.name);
      const newChannel = {
        name: cleanChannelName,
      };
      dispatch(createChannelsByToken({ token, newChannel }));
      dispatch(setStatusChannelModal({ modalName: 'addChannelModal', status: false }));
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
          placeholder={t('channelForm.label')}
        />
        <label className="visually-hidden" htmlFor="name">
          {t('channelForm.label')}
        </label>
        {formik.errors.name && (
          <Form.Control.Feedback type="invalid">
            {formik.errors.name}
          </Form.Control.Feedback>
        )}
        <div className="d-flex justify-content-end">
          <Button
            variant="secondary"
            className="me-2"
            onClick={() => dispatch(setStatusChannelModal({ modalName: 'addChannelModal', status: false }))}
          >
            {t('channelForm.cancel')}
          </Button>
          <Button type="submit">{t('channelForm.submit')}</Button>
        </div>
      </Form.Group>
    </Form>
  );
};

export default ChannelForm;