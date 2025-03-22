import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/welcome/welcome.tsx"),
  route("/dashboard", "routes/dashboard/dashboard.tsx"),
] satisfies RouteConfig;
