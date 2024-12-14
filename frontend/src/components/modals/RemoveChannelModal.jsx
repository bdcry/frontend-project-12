import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { setStatusChannelModal } from '../../store/slices/modalsSlice';
import { removeChannelById } from '../../store/slices/channelsSlice';

const RemoveChannelModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const token = useSelector(({ auth }) => auth.token);
  const modalStatus = useSelector(({ ui }) => ui.modals.removeChannelModal);
  const { activeChannelId } = useSelector(({ ui }) => ui.modals);

  const handleRemove = () => {
    dispatch(removeChannelById({ token, id: activeChannelId }));
    dispatch(
      setStatusChannelModal({
        modalName: 'removeChannelModal',
        status: false,
      }),
    );
  };

  return (
    <Modal
      show={modalStatus}
      onHide={() => dispatch(setStatusChannelModal({ modalName: 'removeChannelModal', status: false }))}
      dialogClassName="modal-dialog-centered"
    >
      <Modal.Header>
        <Modal.Title>{t('removeChannelModal.title')}</Modal.Title>
        <Button
          aria-label="Close"
          data-bs-dismiss="modal"
          variant="close"
          onClick={() => dispatch(setStatusChannelModal({ modalName: 'removeChannelModal', status: false }))}
        />
      </Modal.Header>
      <Modal.Body>
        <p className="lead">{t('removeChannelModal.body')}</p>
        <div className="d-flex justify-content-end">
          <Button
            variant="secondary"
            className="me-2"
            onClick={() => dispatch(setStatusChannelModal({ modalName: 'removeChannelModal', status: false }))}
          >
            {t('removeChannelModal.cancel')}
          </Button>
          <Button
            type="submit"
            variant="danger"
            onClick={handleRemove}
          >
            {t('removeChannelModal.remove')}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RemoveChannelModal;
