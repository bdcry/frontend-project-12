import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  Col,
  Container,
  Row,
  Nav,
} from 'react-bootstrap';
import MessageForm from './subcomponents/MessageForm';
import { fetchChannelsByToken } from '../../store/slices/channelsSlice';
import { fetchMessagesByToken } from '../../store/slices/messagesSlice';
import AddChannelModal from '../modals/AddChannelModal';
import ChannelsList from './subcomponents/ChannelsList';

const Chat = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const token = useSelector(({ auth }) => auth.token);
  const username = useSelector(({ auth }) => auth.username);
  const channelsData = useSelector(({ channels }) => channels.channelsData);
  const activeChannelId = useSelector(({ channels }) => channels.activeChannelId);
  const messagesData = useSelector(({ messages }) => messages.messagesData);

  const ActiveChannelForTitle = channelsData.find((c) => c.id === activeChannelId) || {};
  const filteredMessage = messagesData.filter((m) => m.channelId === activeChannelId);

  useEffect(() => {
    dispatch(fetchChannelsByToken(token));
    dispatch(fetchMessagesByToken(token));
  }, [dispatch, token]);

  const renderMessages = () =>
    filteredMessage.map((message) => (
      <div
        id="messages-box"
        className="chat-messages overflow-auto px-5"
        key={message.id}
      >
        <span className={message.username === username ? 'fw-bold' : 'fw-normal'}>
          {message.username}
          :
          {' '}
        </span>
        {message.body}
      </div>
    ));

  return (
    <Container className="h-100 my-4 overflow-hidden rounded shadow">
      <Row className="h-100 bg-white flex-md-row">
        <Col xs={4} className="col-md-2 border-end px-0 bg-light flex-column h-100 d-flex">
          <div className="d-flex mt-1 justify-content-between mb-2 ps-4 pe-2 p-4">
            <b>{t('chat.title')}</b>
            <AddChannelModal />
          </div>
          <Nav
            as="ul"
            id="channels-box"
            className="flex-column nav-pills nav-fill px-2 mb-3 overflow-auto h-100 d-block"
          >
            <ChannelsList data={{ channels: channelsData, activeChannelId }} />
          </Nav>
        </Col>
        <Col className="p-0 h-100">
          <div className="d-flex flex-column h-100">
            <div className="bg-light mb-4 p-3 shadow-sm small">
              <p className="m-0">
                <b>
                  #
                  {ActiveChannelForTitle.name}
                </b>
              </p>
              <span className="text-muted">
                {t('chat.messages_count', { count: filteredMessage.length })}
              </span>
            </div>
            {renderMessages()}
            <div className="mt-auto px-5 py-3">
              <MessageForm />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;
