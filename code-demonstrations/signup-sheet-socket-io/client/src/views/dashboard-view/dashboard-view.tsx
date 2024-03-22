import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { EventList } from "../../components/event-list/event-list";

export function DashboardView() {
  const navigate = useNavigate();

  return (
    <>
      <h1>Dashboard</h1>
      <Button onClick={() => navigate("/events/create")}>
        Create new event
      </Button>
      <EventList />
    </>
  );
}
