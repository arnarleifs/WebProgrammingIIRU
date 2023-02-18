import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import EventList from "../../components/EventList";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Dashboard</h1>
      <Button onClick={() => navigate('/events/create')}>Create new event</Button>
      <EventList />
    </>
  );
}

export default Dashboard;