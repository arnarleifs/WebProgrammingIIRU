import { Avatar, Heading, List, ListItem } from "@chakra-ui/react";
import { Attendee } from "../../types";

interface AttendeesProps {
  attendees: Attendee[];
}

export function Attendees(props: AttendeesProps) {
  return (
    <>
      <Heading>Attendees</Heading>
      <List>
        {props.attendees.map((a) => (
          <ListItem key={a.id}>
            <Avatar src={a.avatar} />
            {a.displayName}
          </ListItem>
        ))}
      </List>
    </>
  );
}
