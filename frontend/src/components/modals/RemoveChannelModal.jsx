import PropTypes from 'prop-types';
import { Button, Modal, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusChannelModal } from '../../store/slices/modalsSlice';
import { removeChannelById } from '../../store/slices/channelsSlice';

const RemoveChannelModal = ({ channelId }) => {
  const dispatch = useDispatch();
  const token = useSelector(({ auth }) => auth.token);
  const modalStatus = useSelector(({ ui }) => ui.modals.removeChannelModal);

  const handleRemove = () => {
    dispatch(removeChannelById({ token, id: channelId})); // Передаем ID канала в экшен
    dispatch(
      setStatusChannelModal({
        modalName: 'removeChannelModal',
        status: false,
      })
    );
  };

  return (
    <>
      <Dropdown.Item
        onClick={() =>
          dispatch(
            setStatusChannelModal({
              modalName: 'removeChannelModal',
              status: true,
            })
          )
        }
      >
        Удалить
      </Dropdown.Item>
      <Modal
        show={modalStatus}
        onHide={() =>
          dispatch(
            setStatusChannelModal({
              modalName: 'modalName',
              status: true,
            })
          )
        }
        dialogClassName="modal-dialog-centered"
      >
        <Modal.Header>
          <Modal.Title>Удалить канал</Modal.Title>
          <Button
            aria-label="Close"
            data-bs-dismiss="modal"
            variant="close"
            onClick={() =>
              dispatch(
                setStatusChannelModal({
                  modalName: 'removeChannelModal',
                  status: false,
                })
              )
            }
          ></Button>
        </Modal.Header>
        <Modal.Body>
          <p className="lead">Уверены?</p>
          <div className="d-flex justify-content-end">
            <Button
              variant="secondary"
              className="me-2"
              onClick={() =>
                dispatch(
                  setStatusChannelModal({
                    modalName: 'removeChannelModal',
                    status: false,
                  })
                )
              }
            >
              Отменить
            </Button>
            <Button
              type="submit"
              variant="danger"
              onClick={handleRemove}
            >
              Удалить
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

RemoveChannelModal.propTypes = {
  channelId: PropTypes.string.isRequired,
};

export default RemoveChannelModal;
