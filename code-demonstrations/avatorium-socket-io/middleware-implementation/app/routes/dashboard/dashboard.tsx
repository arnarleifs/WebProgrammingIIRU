import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "~/components/navigation/navigation";
import Users from "~/components/users/users";
import { emitToSocket } from "~/store/actions/socket-actions";
import type { RootState } from "~/store/store";
import "./styles.scss";

const DashboardView = () => {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      emitToSocket({
        evt: "users",
        body: {},
      })
    );
  }, [dispatch]);

  return (
    <div className="dashboard">
      <Navigation />
      <Users users={users} />
    </div>
  );
};

export default DashboardView;
