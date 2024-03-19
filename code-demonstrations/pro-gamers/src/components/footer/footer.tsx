import { useContext } from "react";
import { User } from "../user/user";
import { footer } from "./footer.style";
import { UserContext } from "../../contexts/user-context";
import { Button, ButtonGroup } from "@chakra-ui/react";
import "./footer.css";
import { ThemeContext } from "../../contexts/theme-context";

export function Footer() {
  const { updateUser } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <footer style={footer} className={theme}>
      <User />
      <ButtonGroup>
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
        <Button onClick={() => toggleTheme()}>Toggle theme</Button>
      </ButtonGroup>
    </footer>
  );
}
