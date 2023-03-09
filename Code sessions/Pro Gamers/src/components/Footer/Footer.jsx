import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { User } from "../User/User";
import { Box, Button, ButtonGroup } from "@mui/material";
import "./footer.css";
import { ThemeContext } from "../../contexts/ThemeContext";

export const Footer = () => {
  const userContext = useContext(UserContext);
  const themeContext = useContext(ThemeContext);

  return (
    <footer className={`footer ${themeContext.theme}`}>
      <Box>
        <User username={userContext.username} fullName={userContext.fullName} />
      </Box>
      <Box>
        <ButtonGroup>
          <Button
            variant="outlined"
            onClick={() =>
              userContext.updateUser("Mister Miyagi", "miyagi@j.jp")
            }
          >
            Change user
          </Button>
          <Button variant="outlined" onClick={themeContext.toggleTheme}>
            Switch to {themeContext.theme === "dark" ? "light" : "dark"} theme
          </Button>
        </ButtonGroup>
      </Box>
    </footer>
  );
};
