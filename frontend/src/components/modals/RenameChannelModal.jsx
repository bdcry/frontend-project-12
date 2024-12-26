import { Button, Modal, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useContext } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { setStatusChannelModal } from '../../store/slices/modalsSlice';
import { renameChannelById } from '../../store/slices/channelsSlice';
import { channelSchema } from '../../utils/validation/validationForm';
import FilterContext from '../../utils/context/FilterContext';

const RenameChannelModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { activeChannelId } = useSelector(({ ui }) => ui.modals);
  const modalStatus = useSelector(({ ui }) => ui.modals.renameChannelModal);
  const token = useSelector(({ auth }) => auth.token);
  const channelsData = useSelector(({ channels }) => channels.channelsData);
  const currentChannel = channelsData.find((channel) => channel.id === activeChannelId);
  const filter = useContext(FilterContext);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: currentChannel.name.trim(),
    },
    validationSchema: channelSchema(channelsData, t, currentChannel.name),
    onSubmit: (values, { resetForm }) => {
      const cleanChannelName = filter.clean(values.name.trim());
      const editedChannel = { name: cleanChannelName };
      dispatch(renameChannelById({ token, id: currentChannel.id, editedChannel }));
      dispatch(
        setStatusChannelModal({
          modalName: 'renameChannelModal',
          status: false,
          channelId: null,
        }),
      );
      resetForm();
    },
  });

  return (
    <Modal
      show={modalStatus}
      onHide={() => dispatch(
        setStatusChannelModal({
          modalName: 'renameChannelModal',
          status: false,
          channelId: null,
        }),
      )}
      dialogClassName="modal-dialog-centered"
    >
      <Modal.Header>
        <Modal.Title>{t('renameChannelModal.title')}</Modal.Title>
        <Button
          aria-label="Close"
          data-bs-dismiss="modal"
          variant="close"
          onClick={() => dispatch(
            setStatusChannelModal({
              modalName: 'renameChannelModal',
              status: false,
              channelId: null,
            }),
          )}
        />
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Control
              ref={inputRef}
              onFocus={() => inputRef.current.select()}
              name="name"
              id="name"
              className="mb-2"
              placeholder={t('renameChannelModal.placeholder')}
              onChange={formik.handleChange}
              value={formik.values.name}
              isInvalid={formik.errors.name && formik.touched.name}
            />
            <label className="visually-hidden" htmlFor="name">{t('renameChannelModal.hidden_title')}</label>
            <Form.Control.Feedback type="invalid">
              {formik.errors.name}
            </Form.Control.Feedback>
            <div className="d-flex justify-content-end">
              <Button
                variant="secondary"
                className="me-2"
                onClick={() => dispatch(
                  setStatusChannelModal({
                    modalName: 'renameChannelModal',
                    status: false,
                    channelId: null,
                  }),
                )}
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
