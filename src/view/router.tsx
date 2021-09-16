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
  {
    path: "/contact/new",
    loader: () => import("src/view/Contact/form/ContactFomPage"),
  },
].filter(Boolean);
const simpleRoutes = [
  { path: "**", loader: () => import("src/view/shared/errors/Error404Page") },
];
export default {
  privateRoutes,
  simpleRoutes,
};
