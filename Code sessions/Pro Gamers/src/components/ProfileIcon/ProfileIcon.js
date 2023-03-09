import { useSelector } from "react-redux";
import "./styles.css";

export const ProfileIcon = () => {
  const profile = useSelector((state) => state.profile);

  return (
    <div
      className="profile-icon"
      style={{
        backgroundImage: `url(${profile?.image})`,
      }}
    >
      {profile?.fullName}
    </div>
  );
};
