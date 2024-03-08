import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NewsView } from "../views/news";
import { About } from "../views/about";
import { TopGames } from "../views/top-games";
import { RootLayout } from "../layouts/root-layout";
import { NewsDetails } from "../views/news-details";

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<NewsView />} />
        <Route path="/news/:newsItemId" element={<NewsDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/topgames" element={<TopGames />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
