import { Button } from "@chakra-ui/react";
import { User } from "../user/user";
import { footerStyleCompose } from "./styles";
import { UserContext } from "@/contexts/user-context";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/theme-context";
import { ThemeVariation } from "@/types/theme-variation";

export function Footer() {
  const { setUser } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  function updateUser() {
    setUser({
      username: 'test@test.com',
      fullName: 'Test Testsson',
      profileImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQoCdGQriUwz_gtaESlzplgRlBf4K3PQ4ffNA9O3-6jh3nMrngcpdl-cEdSLaIyOC3v68&usqp=CAU'
    });
  }

  function renderThemeText() {
    if (theme === ThemeVariation.Dark) {
      return 'Switch to light mode';
    }

    return 'Switch to dark mode';
  }

  return (
    <footer style={footerStyleCompose(theme)}>
      <User />
      <Button onClick={updateUser}>Update user</Button>
      <Button onClick={toggleTheme}>{renderThemeText()}</Button>
    </footer>
  )
}