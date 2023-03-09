import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { User } from "../User/User";
import { Box, Button, ButtonGroup } from "@mui/material";
import "./footer.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { ProfileIcon } from "../ProfileIcon/ProfileIcon";
import { useDispatch, useSelector } from "react-redux";
import { change } from "../../slices/languageSlice";

export const Footer = () => {
  const dispatch = useDispatch();
  const userContext = useContext(UserContext);
  const themeContext = useContext(ThemeContext);
  const translations = useSelector((state) => state.language.translations);

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
            {translations.changeUser}
          </Button>
          <Button variant="outlined" onClick={themeContext.toggleTheme}>
            {translations.switchTo}{" "}
            {themeContext.theme === "dark"
              ? translations.light
              : translations.dark}{" "}
            {translations.theme}
          </Button>
          <Button variant="outlined" onClick={() => dispatch(change())}>
            {translations.changeLanguage}
          </Button>
        </ButtonGroup>
      </Box>
      <ProfileIcon />
    </footer>
  );
};
