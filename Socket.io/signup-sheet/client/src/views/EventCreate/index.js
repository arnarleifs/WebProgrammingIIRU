import React, { useState } from "react";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { createNewEvent } from "../../services/eventService";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import socket from '../../services/socketService';

const EventCreate = () => {
  const user = useSelector(state => state.user);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [maximum, setMaximum] = useState(10);

  const createEvent = async () => {
    setErrorMessage('');

    const event = { title, start, end, maximum, host: user };
    const newEvent = await createNewEvent(event);

    if (newEvent) {
      socket.emit('newevent', newEvent);
      navigate('/dashboard');
    }
    else { setErrorMessage('Failed to create the event.'); }
  };

  return (
    <>
      <h1>Create an event</h1>
      <Stack
        component="form"
        spacing={2}
        noValidate
        autoComplete="off"
      >
        <TextField id="title-textfield" value={title} onChange={evt => setTitle(evt.target.value)} label="Title" variant="outlined" />
        <TextField id="start-textfield" InputLabelProps={{ shrink: true }} type="date" value={start} onChange={evt => setStart(evt.target.value)} label="Start time" variant="outlined" />
        <TextField id="end-textfield" InputLabelProps={{ shrink: true }} type="date" value={end} onChange={evt => setEnd(evt.target.value)} label="End time" variant="outlined" />
        <TextField id="maximum-textfield" type="number" value={maximum} onChange={evt => setMaximum(evt.target.value)} label="Maximum attendees" variant="outlined" />
        <Button onClick={() => createEvent()} variant="contained">Create</Button>
        <p>{errorMessage}</p>
      </Stack>
    </>
  )
};

export default EventCreate;