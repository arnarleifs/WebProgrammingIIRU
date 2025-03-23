import Navigation from "~/components/navigation/navigation";
import Users from "~/components/users/users";
import "./styles.scss";

const DashboardView = () => {
  return (
    <div className="dashboard">
      <Navigation />
      <Users users={[]} />
    </div>
  );
};

export default DashboardView;
