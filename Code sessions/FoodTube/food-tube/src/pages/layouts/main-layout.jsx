import { Outlet } from "react-router-dom";
import { NavigationBar } from "../../components/navigation-bar/navigation-bar";

export const MainLayout = () => (
  <>
    <NavigationBar />
    <main>
      <Outlet />
    </main>
  </>
);