import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { MainLayout } from "../pages/layouts/main-layout";
import { Gallery } from "../pages/gallery/gallery";
import { VideoDetailSite } from "../pages/video-detail-site/video-detail-site";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route path="/" element={<Gallery />} />
      <Route path="/:videoId" element={<VideoDetailSite />} />
    </Route>
  )
);

export default router;
