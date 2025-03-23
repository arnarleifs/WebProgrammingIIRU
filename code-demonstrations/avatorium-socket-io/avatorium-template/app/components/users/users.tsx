import "./styles.scss";
import type { User as UserType } from "../../types/user";
import User from "../user/user";

interface UsersProps {
  users: UserType[];
}

const Users = ({ users }: UsersProps) => (
  <div className="users">
    {users.map((user) => (
      <User key={user.userID} user={user} />
    ))}
  </div>
);

export default Users;
