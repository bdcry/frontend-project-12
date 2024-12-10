import { Button, Nav, Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { selectActiveTab } from '../../../store/slices/channelsSlice';
import RemoveChannelModal from '../../modals/RemoveChannelModal';

const ChannelsList = ({ data }) => {
  const dispatch = useDispatch();
  const { channels, activeChannelId } = data;

  return channels.map((channel) => (
    <Nav.Item as="li" className="w-100" key={channel.id}>
      {!channel.removable && (
        <Button
            type="button"
            className="w-100 rounded-0 text-start text-truncate"
            variant={channel.id === activeChannelId ? 'secondary' : ''}
            onClick={() => dispatch(selectActiveTab(channel.id))}
          >
            <span className="me-1">#</span>
            {channel.name}
          </Button>
      )}
      {channel.removable && (
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
            <RemoveChannelModal channelId={channel.id} />
            <Dropdown.Item href="#/action-2">Переименовать</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}
    </Nav.Item>
  ));
};

export default ChannelsList;
