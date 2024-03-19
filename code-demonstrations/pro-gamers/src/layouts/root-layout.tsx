import { Outlet } from "react-router-dom";
import { Navigation } from "../components/navigation/navigation";
import { appContainer } from "./root-layout.style";
import { UserContext } from "../contexts/user-context";
import { useState } from "react";
import { User } from "../types/user";
import { Footer } from "../components/footer/footer";
import { ThemeContext } from "../contexts/theme-context";

export function RootLayout() {
  const [user, setUser] = useState<User>({
    username: "arnarl",
    fullName: "Arnar Leifsson",
    profileImage:
      "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png",
  });

  const [theme, setTheme] = useState<string>("dark");

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
          user,
          updateUser: (user) => setUser(user),
        }}
      >
        <Navigation />
        <div style={appContainer}>
          <Outlet />
        </div>
        <Footer />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}
