import { Form, Button, InputGroup } from 'react-bootstrap';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessagesByToken } from '../store/slices/messagesSlice';
import FilterContext from '../utils/context/FilterContext';

const MessageForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const token = useSelector(({ auth }) => auth.token);
  const username = useSelector(({ auth }) => auth.username);
  const activeChannelId = useSelector(({ channels }) => channels.activeChannelId);
  const filter = useContext(FilterContext);

  const formik = useFormik({
    initialValues: {
      body: '',
    },
    onSubmit: (values, { resetForm }) => {
      const cleanMessages = filter.clean(values.body);
      const newMessage = {
        body: cleanMessages,
        channelId: activeChannelId,
        username,
      };
      dispatch(sendMessagesByToken({ token, newMessage }));
      resetForm();
    },
  });

  return (
    <Form
      noValidate
      className="py-1 border rounded-2"
      onSubmit={formik.handleSubmit}
    >
      <InputGroup className="has-validation">
        <Form.Control
          name="body"
          aria-label={t('messageForm.ariaLabel')}
          placeholder={t('messageForm.placeholder')}
          className="border-0 p-0 ps-2"
          onChange={formik.handleChange}
          value={formik.values.body}
        />
        <Button
          type="submit"
          disabled={!formik.values.body}
          variant="light"
          className="btn-group-vertical"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1
                 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2
                 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0
                 1-2 2H2a2 2 0 0 1-2-2zm4.5 5.5a.5.5
                 0 0 0 0 1h5.793l-2.147 2.146a.5.5
                 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5
                 0 1 0-.708.708L10.293 7.5z"
            />
          </svg>
          <span className="visually-hidden">{t('messageForm.submit')}</span>
        </Button>
      </InputGroup>
    </Form>
  );
};

export default MessageForm;
