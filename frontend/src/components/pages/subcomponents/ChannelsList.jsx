import PropTypes from 'prop-types';
import { Button, Nav, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectActiveTab } from '../../../store/slices/channelsSlice';
import { setStatusChannelModal } from '../../../store/slices/modalsSlice';
import RenameChannelModal from '../../modals/RenameChannelModal';
import RemoveChannelModal from '../../modals/RemoveChannelModal'

const ChannelsList = ({ data }) => {
  const dispatch = useDispatch();
  const { channels, activeChannelId } = data;
  const modals = useSelector(({ ui }) => ui.modals);

  const renderNotRemovableChannels = (channel) =>
    !channel.removable && (
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
        className="flex-grow-0 dropdown-toggle-split rounded-0"
      ></Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() =>
            dispatch(
              setStatusChannelModal({
                modalName: 'removeChannelModal',
                status: true,
                channelId: channel.id,
              })
            )
          }
        >
          Удалить
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() =>
            dispatch(
              setStatusChannelModal({
                modalName: 'renameChannelModal',
                status: true,
                channelId: channel.id,
              })
            )
          }
        >
          Переименовать
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

ChannelsList.propTypes = {
  data: PropTypes.object,
};

export default ChannelsList;
