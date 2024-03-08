import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";
import { Avatar } from "@chakra-ui/react";

export function User() {
  const { user } = useContext(UserContext);

  return <Avatar size="lg" name={user?.fullName} src={user?.profileImage} />;
}
