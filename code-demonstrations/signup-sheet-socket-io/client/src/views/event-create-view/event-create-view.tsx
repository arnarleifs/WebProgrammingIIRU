import { Button, FormControl, FormLabel, Heading, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { socket } from "../../services/socket-service";
import { createNewEvent } from "../../services/event-service";
import { IRootState } from "../../redux/store";

export function EventCreateView() {
  const user = useSelector((state: IRootState) => state.user);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [title, setTitle] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [maximum, setMaximum] = useState(10);

  const createEvent = async () => {
    setErrorMessage("");

    const event = { title, start, end, maximum, host: user! };
    const newEvent = await createNewEvent(event);

    if (newEvent) {
      socket.emit("newevent", newEvent);
      navigate("/dashboard");
    } else {
      setErrorMessage("Failed to create the event.");
    }
  };

  return (
    <>
      <Heading>Create an event</Heading>
      <Stack spacing={2}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            id="title-input"
            type="text"
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
            variant="outline"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Start date</FormLabel>
          <Input
            id="start-date-input"
            type="date"
            value={start}
            onChange={(evt) => setStart(evt.target.value)}
            variant="outline"
          />
        </FormControl>
        <FormControl>
          <FormLabel>End date</FormLabel>
          <Input
            id="end-date-input"
            type="date"
            value={end}
            onChange={(evt) => setEnd(evt.target.value)}
            variant="outline"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Maximum attendees</FormLabel>
          <Input
            id="maximum-attendees-input"
            type="number"
            value={maximum}
            onChange={(evt) =>
              setMaximum(evt.target.value as unknown as number)
            }
            variant="outline"
          />
        </FormControl>
        <Button onClick={() => createEvent()} variant="contained">
          Create
        </Button>
        <p>{errorMessage}</p>
      </Stack>
    </>
  );
}
