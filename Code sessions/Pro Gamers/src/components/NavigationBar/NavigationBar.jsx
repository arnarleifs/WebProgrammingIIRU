import "./styles.css";
import { NavigationLink } from "../NavigationLink/NavigationLink";
import { User } from "../User/User";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ThemeContext } from "../../contexts/ThemeContext";

export const NavigationBar = () => {
  const userContext = useContext(UserContext);
  const themeContext = useContext(ThemeContext);

  return (
    <nav className={`navigation-bar ${themeContext.theme}`}>
      <ul className="navigation-links">
        <NavigationLink title="News" href="/news" />
        <NavigationLink title="Top 10 Games" href="/top-games" />
        <NavigationLink title="About" href="/about" />
        <NavigationLink title="Subscribe now!" href="/subscribe-now" />
      </ul>
      <User username={userContext.username} fullName={userContext.fullName} />
    </nav>
  );
};
