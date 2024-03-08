import { navigationBar, navigationBarLink, navigationBarLinks } from "./styles";
import "./navigation.css";
import { Link } from "react-router-dom";
import { User } from "../user/user";
import { Box } from "@chakra-ui/react";

export function Navigation() {
  return (
    <nav style={navigationBar}>
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
      </ul>
      <Box>
        <User />
      </Box>
    </nav>
  );
}
