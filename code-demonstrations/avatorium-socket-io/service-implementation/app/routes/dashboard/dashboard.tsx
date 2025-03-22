import { useEffect, useState } from "react";
import Navigation from "~/components/navigation/navigation";
import Users from "~/components/users/users";
import "./styles.scss";
import socket from "~/services/socket-service";
import type { User } from "~/types/user";

const DashboardView = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    socket.emit("users");

    socket.on("users", (users) => {
      setUsers(users);
    });

    socket.on("connected_user", (user) => {
      setUsers((users) => [...users, user]);
    });

    socket.on("disconnected_user", (userID) => {
      setUsers((users) => users.filter((u) => u.userID !== userID));
    });

    return () => {
      socket.off("users");
      socket.off("connected_user");
      socket.off("disconnected_user");
    };
  }, []);

  return (
    <div className="dashboard">
      <Navigation />
      <Users users={users} />
    </div>
  );
};

export default DashboardView;
