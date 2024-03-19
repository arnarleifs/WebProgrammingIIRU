import { navigationBar, navigationBarLink, navigationBarLinks } from "./styles";
import "./navigation.css";
import { Link } from "react-router-dom";
import { User } from "../user/user";
import { Box } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

export function Navigation() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav style={navigationBar} className={theme}>
      <ul style={navigationBarLinks}>
        <li className="navigation-bar-link" style={navigationBarLink}>
          <Link to="/">News</Link>
        </li>
        <li className="navigation-bar-link" style={navigationBarLink}>
          <Link to="/topgames">Top 10 Games</Link>
        </li>
        <li className="navigation-bar-link" style={navigationBarLink}>
          <Link to="/about">About</Link>
        </li>
        <li className="navigation-bar-link" style={navigationBarLink}>
          <Link to="/subscribe">Subscribe</Link>
        </li>
      </ul>
      <Box>
        <User />
      </Box>
    </nav>
  );
}
