import { Button, Heading } from "@chakra-ui/react";
import moment from "moment";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { hostAvatar, hostContainer } from "./styles.css";
import { Attendees } from "../../components/attendees/attendees";
import { socket } from "../../services/socket-service";
import { IRootState } from "../../redux/store";

export function EventDetailsView() {
  const { eventId } = useParams();
  const event = useSelector((state: IRootState) =>
    state.event.events.find((e) => e._id === eventId)
  );
  const user = useSelector((state: IRootState) => state.user);

  const signupForEvent = () => socket.emit("usersignup", eventId, user);

  return (
    <>
      {event ? (
        <>
          <Heading>{event.title}</Heading>
          <Button onClick={() => signupForEvent()}>Signup</Button>
          <div className={hostContainer}>
            <div
              className={hostAvatar}
              style={{ backgroundImage: `url(${event.host.avatar})` }}
            ></div>
            <div>{event.host.displayName}</div>
          </div>
          <div>
            <strong>Start time:</strong> {moment(event.start).format("LLL")}
          </div>
          <div>
            <strong>End time:</strong> {moment(event.start).format("LLL")}
          </div>
          <div>
            <strong>Attendees:</strong> {event.attendees.length} /{" "}
            {event.maximum}
          </div>
          <Attendees attendees={event.attendees} />
        </>
      ) : (
        <h2>Loading</h2>
      )}
    </>
  );
}
