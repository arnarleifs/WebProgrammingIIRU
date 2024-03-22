import { Container } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { getUser } from "../services/user-service";
import { socket } from "../services/socket-service";
import { IRootState } from "../redux/store";
import { setUser } from "../redux/features/user/user-slice";
import { getEvents, setEvents } from "../redux/features/events/events-slice";

export function MainLayout() {
  const user = useSelector((state: IRootState) => state.user);
  const event = useSelector((state: IRootState) => state.event);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // On mount
  useEffect(() => {
    (async () => {
      if (Object.keys(user).length > 0) {
        return;
      }
      const session = await getUser();

      if (!session) {
        navigate("/");
      } else {
        dispatch(setUser(session));
      }
    })();
    dispatch(getEvents());
  }, [dispatch, navigate, user]);

  // On events changes
  useEffect(() => {
    socket.on("newevent", (newEvent) => {
      dispatch(setEvents([...event.events, newEvent]));
    });

    socket.on("usersignup", (eventId, user) => {
      dispatch(
        setEvents(
          event.events.map((e) => {
            if (e._id === eventId) {
              return {
                ...e,
                attendees: [...e.attendees, user],
              };
            }
            return e;
          })
        )
      );
    });

    return () => {
      socket.off("newevent");
      socket.off("usersignup");
    };
  }, [dispatch, event.events]);

  return (
    <Container>
      <Outlet />
    </Container>
  );
}
