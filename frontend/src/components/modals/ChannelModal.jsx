import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const ChannelModal = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant="link"
        className="p-0 text-primary btn-group-vertical"
        onClick={() => setShow(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width="20"
          height="20"
          fill="currentColor"
        >
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path>
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"></path>
        </svg>
        <span className="visually-hidden">Добавить канал</span>
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-dialog-centered"
      >
        <Modal.Header>
          <Modal.Title>Добавить канал</Modal.Title>
          <Button
            aria-label="Close"
            data-bs-dismiss="modal"
            variant="close"
            onClick={() => setShow(false)}
          ></Button>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                name="name"
                id="name"
                className="mb-2"
                value="тут из формика возьмем валуе"
              ></Form.Control>
              <label className="visually-hidden" htmlFor="name">
                Имя канала
              </label>
              {/* Todo:  сделать вывод ошибки через формик в invalid-feedback */}
              <div className="invalid-feedback"></div>
              <div className="d-flex justify-content-end">
                <Button variant="secondary" className="me-2" onClick={(() => setShow(false))}>
                  Отменить
                </Button>
                <Button type="submit">Отправить</Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChannelModal;
