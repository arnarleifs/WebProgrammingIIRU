import { CalendarIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Icon,
  List,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import moment from "moment";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IRootState } from "../../redux/store";

export function EventList() {
  const event = useSelector((state: IRootState) => state.event);
  const navigate = useNavigate();

  const navigateToEvent = (id: string) => navigate(`/events/${id}`);

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {event.events.map((e) => (
        <Card
          key={e._id}
          onClick={() => navigateToEvent(e._id)}
          marginTop={10}
          marginBottom={10}
        >
          <CardHeader>
            <Heading size="md">
              <Icon as={CalendarIcon} />
              {e.title}
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  {e.host.displayName}
                </Heading>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  {`Start time: ${moment(e.start).format("LLL")}`}
                </Heading>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  {`End time: ${moment(e.end).format("LLL")}`}
                </Heading>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  {`Participants: ${e.attendees.length} / ${e.maximum}`}
                </Heading>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </List>
  );
}
