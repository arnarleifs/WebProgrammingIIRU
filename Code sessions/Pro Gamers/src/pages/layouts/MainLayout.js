import { Outlet } from "react-router-dom";
import { NavigationBar } from "../../components/NavigationBar/NavigationBar";
import { Footer } from "../../components/Footer/Footer";
import "../page-styles.css";
import { UserContext } from "../../contexts/UserContext";
import { useState } from "react";

function MainLayout() {
  const [user, setUser] = useState({
    username: 'arnarl@ru.is',
    fullName: 'Arnar Leifsson'
  });
  return (
    <UserContext.Provider value={{
      ...user,
      updateUser: (fullName, username) => {
        setUser({ username, fullName });
      }
    }}>
      <NavigationBar />
      <div className="page">
        <Outlet />
      </div>
      <Footer />
    </UserContext.Provider>
  )
}

export default MainLayout;