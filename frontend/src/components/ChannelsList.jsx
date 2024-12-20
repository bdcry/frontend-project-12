import { Button, Nav, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { selectActiveTab } from '../store/slices/channelsSlice';
import { setStatusChannelModal } from '../store/slices/modalsSlice';
import RenameChannelModal from './modals/RenameChannelModal';
import RemoveChannelModal from './modals/RemoveChannelModal';

const ChannelsList = ({ data = { channels: [], activeChannelId: null } }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { channels, activeChannelId } = data;
  const modals = useSelector(({ ui }) => ui.modals);

  const renderNotRemovableChannels = (channel) => !channel.removable && (
  <Button
    type="button"
    className="w-100 rounded-0 text-start text-truncate"
    variant={channel.id === activeChannelId ? 'secondary' : ''}
    onClick={() => dispatch(selectActiveTab(channel.id))}
  >
    <span className="me-1">#</span>
    {channel.name}
  </Button>
  );

  const renderRemovableChannels = (channel) => (
    <Dropdown className="d-flex btn-group" role="group">
      <Button
        type="button"
        className="w-100 rounded-0 text-start text-truncate"
        variant={channel.id === activeChannelId ? 'secondary' : ''}
        onClick={() => dispatch(selectActiveTab(channel.id))}
      >
        <span className="me-1">#</span>
        {channel.name}
      </Button>
      <Dropdown.Toggle
        variant={channel.id === activeChannelId ? 'secondary' : ''}
        className="flex-grow-0 dropdown-toggle-split"
      >
        <span className="visually-hidden">{t('chat.hidden_button')}</span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => dispatch(
            setStatusChannelModal({
              modalName: 'removeChannelModal',
              status: true,
              channelId: channel.id,
            }),
          )}
        >
          {t('channelsList.remove')}
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => dispatch(
            setStatusChannelModal({
              modalName: 'renameChannelModal',
              status: true,
              channelId: channel.id,
            }),
          )}
        >
          {t('channelsList.rename')}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );

  return (
    <>
      {channels.map((channel) => (
        <Nav.Item as="li" className="w-100" key={channel.id}>
          {channel.removable
            ? renderRemovableChannels(channel)
            : renderNotRemovableChannels(channel)}
        </Nav.Item>
      ))}
      {modals.removeChannelModal && <RemoveChannelModal />}
      {modals.renameChannelModal && <RenameChannelModal />}
    </>
  );
};

export default ChannelsList;
