import React from 'react';
import { useSelector } from 'react-redux';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import EventIcon from '@mui/icons-material/Event';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const EventList = () => {
  const events = useSelector(state => state.event);
  const navigate = useNavigate();

  const navigateToEvent = id => navigate(`/events/${id}`);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {events.map(e => (
        <ListItem style={{ flexDirection: 'column' }} onClick={() => navigateToEvent(e._id)} key={e._id} alignItems="flex-start" divider={true}>
          <ListItemAvatar>
            <EventIcon />
          </ListItemAvatar>
          <ListItemText
            primary={e.title}
            component="div"
            variant="body2"
            color="text.primary"
          />
          <ListItemText
            primary={`Host: ${e.host.displayName}`}
            component="div"
            variant="body2"
            color="text.primary"
          />
          <ListItemText
            primary={`Start time: ${moment(e.start).format('LLL')}`}
            component="div"
            variant="body2"
            color="text.primary"
          />
          <ListItemText
            primary={`End time: ${moment(e.end).format('LLL')}`}
            component="div"
            variant="body2"
            color="text.primary"
          />
          <ListItemText
            primary={`Participants: ${e.attendees.length} / ${e.maximum}`}
            component="div"
            variant="body2"
            color="text.primary"
          />
        </ListItem>
      ))}
    </List>
  );
};

export default EventList;