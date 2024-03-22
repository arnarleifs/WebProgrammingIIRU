import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Outlet, useNavigate } from "react-router-dom";
import { getUser } from '../../services/userService';
import { setUser } from '../../actions/userActions';
import Container from '@mui/material/Container';
import { getEvents, setEvents } from '../../actions/eventActions';
import socket from '../../services/socketService';

const MainLayout = () => {
  const user = useSelector(state => state.user);
  const events = useSelector(state => state.event);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // On mount
  useEffect(() => {
    (async () => {
      if (Object.keys(user).length > 0) { return; }
      const session = await getUser();

      if (!session) {
        navigate('/');
      } else {
        dispatch(setUser(session));
      }
    })();
    dispatch(getEvents());
  }, []);

  // On events changes
  useEffect(() => {
    socket.on('newevent', event => {
      dispatch(setEvents([ ...events, event ]));
    });

    socket.on('usersignup', (eventId, user) => {
      dispatch(setEvents(events.map(e => {
        if (e._id === eventId) {
          return {
            ...e,
            attendees: [ ...e.attendees, user ]
          }
        }
        return e;
      })));
    });

    return () => {
      socket.off('newevent');
      socket.off('usersignup');
    };
  }, [events]);

  return (
    <Container>
      <Outlet />
    </Container>
  );
};

export default MainLayout;