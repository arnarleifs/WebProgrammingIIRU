import { CalendarIcon } from "@chakra-ui/icons";
import { Icon, List, ListItem, Text } from "@chakra-ui/react";
import moment from "moment";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export function EventList() {
  const events = useSelector((state) => state.event);
  const navigate = useNavigate();

  const navigateToEvent = (id: number) => navigate(`/events/${id}`);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {events.map((e) => (
        <ListItem
          style={{ flexDirection: "column" }}
          onClick={() => navigateToEvent(e._id)}
          key={e._id}
          alignItems="flex-start"
        >
          <Icon as={CalendarIcon} />
          <Text>{e.title}</Text>
          <Text>{e.host.displayName}</Text>
          <Text>{`Start time: ${moment(e.start).format("LLL")}`}</Text>
          <Text>{`End time: ${moment(e.end).format("LLL")}`}</Text>
          <Text>{`Participants: ${e.attendees.length} / ${e.maximum}`}</Text>
        </ListItem>
      ))}
    </List>
  );
}
