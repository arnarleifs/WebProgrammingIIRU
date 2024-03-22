import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router-dom";
import { DashboardView } from "../views/dashboard-view/dashboard-view";
import { EventCreateView } from "../views/event-create-view/event-create-view";
import { EventDetailsView } from "../views/event-details-view/event-details-view";
import { LoginView } from "../views/login-view/login-view";
import { MainLayout } from "../layouts/main-layout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      <Route path="/" element={<LoginView />} />
      <Route path="/*" element={<MainLayout />}>
        <Route path="dashboard" element={<DashboardView />} />
        <Route path="events/:eventId" element={<EventDetailsView />} />
        <Route path="events/create" element={<EventCreateView />} />
      </Route>
    </Routes>
  )
);
