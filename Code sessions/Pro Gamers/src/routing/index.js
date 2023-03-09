import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import { News } from '../pages/News/News';
import { About } from '../pages/About/About';
import MainLayout from '../pages/layouts/MainLayout';
import { Top10Games } from '../pages/Top10Games/Top10Games';
import { NewsItemDetails } from '../pages/NewsItemDetails/NewsItemDetails';
import { Subscribe } from '../pages/Subscribe/Subscribe';

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<MainLayout />}>
    <Route path="/" element={<Navigate to="/news" />} />
    <Route path="news" element={<News />} />
    <Route path="news/:newsItemId" element={<NewsItemDetails />} />
    <Route path="about" element={<About />} />
    <Route path="top-games" element={<Top10Games />} />
    <Route path="subscribe-now" element={<Subscribe />} />
  </Route>
));

export default router;