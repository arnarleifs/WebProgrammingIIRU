import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { News } from '../pages/News/News';
import { About } from '../pages/About/About';
import MainLayout from '../pages/layouts/MainLayout';
import { Top10Games } from '../pages/Top10Games/Top10Games';
import { NewsItemDetails } from '../pages/NewsItemDetails/NewsItemDetails';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<MainLayout />}>
    <Route path="news" element={<News />} />
    <Route path="news/:newsItemId" element={<NewsItemDetails />} />
    <Route path="about" element={<About />} />
    <Route path="top-games" element={<Top10Games />} />
  </Route>
));

export default router;