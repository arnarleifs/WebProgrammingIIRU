import "./styles.css";
import { NavigationLink } from "../NavigationLink/NavigationLink";
import { User } from "../User/User";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useSelector } from "react-redux";

export const NavigationBar = () => {
  const translations = useSelector(state => state.language.translations);
  const userContext = useContext(UserContext);
  const themeContext = useContext(ThemeContext);

  return (
    <nav className={`navigation-bar ${themeContext.theme}`}>
      <ul className="navigation-links">
        <NavigationLink title={translations.news} href="/news" />
        <NavigationLink title={translations.topGames} href="/top-games" />
        <NavigationLink title={translations.about} href="/about" />
        <NavigationLink title={translations.subscribe} href="/subscribe-now" />
        <NavigationLink title={translations.profile} href="/profile" />
      </ul>
      <User username={userContext.username} fullName={userContext.fullName} />
    </nav>
  );
};
