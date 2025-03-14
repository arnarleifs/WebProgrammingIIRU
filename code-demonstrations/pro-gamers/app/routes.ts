import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/news.tsx"),
    route("news/:newsItemId", "routes/newsDetails.tsx"),
    route("about", "routes/about.tsx"),
    route("topgames", "routes/topgames.tsx"),
] satisfies RouteConfig;
