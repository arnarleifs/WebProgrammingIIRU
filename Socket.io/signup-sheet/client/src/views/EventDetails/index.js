import React from "react";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import './styles.scss';
import Attendees from "../../components/Attendees";
import { Button } from "@mui/material";
import socket from '../../services/socketService';

const EventDetails = () => {
  const { eventId } = useParams();
  const event = useSelector(state => state.event.find(e => e._id === eventId));
  const user = useSelector(state => state.user);

  const signupForEvent = () => socket.emit('usersignup', eventId, user);

  return (
    <>
      {
        event
        ?
        <>
          <h1>{event.title}</h1>
          <Button onClick={() => signupForEvent()}>Signup</Button>
          <div className="host-container">
            <div className="host-avatar" style={{ backgroundImage: `url(${event.host.avatar})` }}></div>
            <div className="host-name">{event.host.displayName}</div>
          </div>
          <div><strong>Start time:</strong> {moment(event.start).format('LLL')}</div>
          <div><strong>End time:</strong> {moment(event.start).format('LLL')}</div>
          <div><strong>Attendees:</strong> {event.attendees.length} / {event.maximum}</div>
          <Attendees attendees={event.attendees} />
        </>
        :
        <h2>Loading</h2>
      }
      
    </>
  )
};

export default EventDetails;