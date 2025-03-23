import "./styles.scss";
import type { User as UserType } from "../../types/user";

interface UserProps {
  user: UserType;
}

const User = ({ user }: UserProps) => (
  <div className="user" style={{ backgroundImage: `url(${user.avatar})` }} />
);

export default User;
