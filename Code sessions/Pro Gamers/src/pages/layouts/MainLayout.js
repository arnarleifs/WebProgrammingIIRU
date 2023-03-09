import { Outlet } from "react-router-dom";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar";
import { Footer } from "../../components/Footer/Footer";
import "../page-styles.css";
import { UserContext } from "../../contexts/UserContext";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useState } from "react";

function MainLayout() {
  const [user, setUser] = useState({
    username: "arnarl@ru.is",
    fullName: "Arnar Leifsson",
  });
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme: () =>
          setTheme((theme) => (theme === "dark" ? "light" : "dark")),
      }}
    >
      <UserContext.Provider
        value={{
          ...user,
          updateUser: (fullName, username) => {
            setUser({ username, fullName });
          },
        }}
      >
        <NavigationBar />
        <div className="page">
          <Outlet />
        </div>
        <Footer />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default MainLayout;
