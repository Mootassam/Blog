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
  { path: "/500", loader: () => import("src/view/shared/errors/Error500page") },
  { path: "/403", loader: () => import("src/view/shared/errors/Error403Page") },
  { path: "**", loader: () => import("src/view/shared/errors/Error404Page") },
];
export default {
  privateRoutes,
  simpleRoutes,
};
