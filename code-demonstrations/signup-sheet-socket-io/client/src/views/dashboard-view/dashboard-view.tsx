import { Box, Button, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { EventList } from "../../components/event-list/event-list";

export function DashboardView() {
  const navigate = useNavigate();

  return (
    <>
      <Heading>Dashboard</Heading>
      <Box marginTop={5}>
        <Button onClick={() => navigate("/events/create")}>
          Create new event
        </Button>
        <EventList />
      </Box>
    </>
  );
}
