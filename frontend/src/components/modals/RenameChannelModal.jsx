import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusChannelModal } from '../../store/slices/modalsSlice';
import { renameChannelById } from '../../store/slices/channelsSlice';
import { useFormik } from 'formik';
import { channelSchema } from '../../utils/validation/validationForm';
import { useTranslation } from 'react-i18next';

const RenameChannelModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { activeChannelId } = useSelector(({ ui }) => ui.modals);
  const modalStatus = useSelector(({ ui }) => ui.modals.renameChannelModal);
  const token = useSelector(({ auth }) => auth.token);
  const channels = useSelector(({ channels }) => channels.channelsData);
  const channel = channels.find((channel) => channel.id === activeChannelId);

  const formik = useFormik({
    initialValues: {
      name: channel.name,
    },
    validationSchema: channelSchema(channels, channel.name),
    onSubmit: (values, { resetForm }) => {
      const editedChannel = { name: values.name };
      dispatch(renameChannelById({ token, id: channel.id, editedChannel }));
      dispatch(
        setStatusChannelModal({
          modalName: 'renameChannelModal',
          status: false,
          channelId: null,
        })
      );
      resetForm();
    },
  });

  return (
    <Modal
      show={modalStatus}
      onHide={() =>
        dispatch(
          setStatusChannelModal({
            modalName: 'renameChannelModal',
            status: false,
            channelId: null,
          })
        )
      }
      dialogClassName="modal-dialog-centered"
    >
      <Modal.Header>
        <Modal.Title>{t('renameChannelModal.title')}</Modal.Title>
        <Button
          aria-label="Close"
          data-bs-dismiss="modal"
          variant="close"
          onClick={() =>
            dispatch(
              setStatusChannelModal({
                modalName: 'renameChannelModal',
                status: false,
                channelId: null,
              })
            )
          }
        ></Button>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Control
              name="name"
              id="name"
              className="mb-2"
              placeholder={t('renameChannelModal.placeholder')}
              onChange={formik.handleChange}
              value={formik.values.name}
              isInvalid={formik.errors.name && formik.touched.name}
            ></Form.Control>
            <Form.Control.Feedback type="invalid">
              {formik.errors.name}
            </Form.Control.Feedback>
            <div className="d-flex justify-content-end">
              <Button
                variant="secondary"
                className="me-2"
                onClick={() =>
                  dispatch(
                    setStatusChannelModal({
                      modalName: 'renameChannelModal',
                      status: false,
                      channelId: null,
                    })
                  )
                }
              >
                {t('renameChannelModal.cancel')}
              </Button>
              <Button type="submit">{t('renameChannelModal.submit')}</Button>
            </div>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default RenameChannelModal;
