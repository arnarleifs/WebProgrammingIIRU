import { useContext } from "react";
import { User } from "../user/user";
import { footer } from "./footer.style";
import { UserContext } from "../../contexts/user-context";
import { Button } from "@chakra-ui/react";

export function Footer() {
  const { updateUser } = useContext(UserContext);
  return (
    <footer style={footer}>
      <User />
      <Button
        onClick={() =>
          updateUser({
            username: "testuser",
            fullName: "Test User",
            profileImage:
              "https://static.vecteezy.com/system/resources/previews/029/271/069/original/avatar-profile-icon-in-flat-style-female-user-profile-illustration-on-isolated-background-women-profile-sign-business-concept-vector.jpg",
          })
        }
      >
        Update user
      </Button>
    </footer>
  );
}
