import { navigationBar, navigationBarLink, navigationBarLinks } from "./styles";
import "./navigation.css";

export function Navigation() {
  return (
    <nav style={navigationBar}>
      <ul style={navigationBarLinks}>
        <li className="navigation-bar-link" style={navigationBarLink}>
          News
        </li>
        <li className="navigation-bar-link" style={navigationBarLink}>
          Top 10 Games
        </li>
        <li className="navigation-bar-link" style={navigationBarLink}>
          About
        </li>
      </ul>
    </nav>
  );
}
