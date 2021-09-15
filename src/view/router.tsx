/* eslint-disable import/no-anonymous-default-export */

const privateRoutes = [
  {
    path: "/",
    loader: () => import("src/view/Dashboard/DashboardPage"),
  },
  {
    path: "/contact",
    loader: () => import("src/view/Contact/list/ListContactPage"),
  },
].filter(Boolean);
const simpleRoutes = [
  { path: "**", loader: () => import("src/view/Dashboard/DashboardPage") },
];
export default {
  privateRoutes,
  simpleRoutes,
};
