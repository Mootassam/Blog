/* eslint-disable import/no-anonymous-default-export */

const privateRoutes = [
  {
    path: "/",
    loader: () => import("src/view/Dashboard/DashboardPage"),
    exact: true,
  },
  {
    path: "/contact",
    loader: () => import("src/view/Contact/list/ListContactPage"),
    exact: true,
  },
  {
    path: "/contact/new",
    loader: () => import("src/view/Contact/form/ContactFomPage"),
    exact: true,
  },
  {
    path: "/contact/:id/edit",
    loader: () => import("src/view/Contact/form/ContactFomPage"),
    exact: true,
  },
  {
    path: "/contact/:id",
    loader: () => import("src/view/Contact/view/ContactViewPage"),
    exact: true,
  },
  {
    path: "/profile",
    loader: () => import("src/view/Auth/ProfileViewPage"),
    exact: true,
  },
  {
    path: "/education",
    loader: () => import("src/view/Education/list/EducationLisPage"),
    exact: true,
  },
  {
    path: "/experience",
    loader: () => import("src/view/Experience/list/ExperienceListPage"),
    exact: true,
  },
  {
    path: "/experience/new",
    loader: () => import("src/view/Experience/form/experienceFormPage"),
    exact: true,
  },
  {
    path: "/portfolio",
    loader: () => import("src/view/Portfolio/list/PortfolioListPage"),
    exact: true,
  },
].filter(Boolean);

const publicRoutes = [
  {
    path: "/auth/signin",
    loader: () => import("src/view/Auth/SiginPage"),
  },
  {
    path: "/auth/signup",
    loader: () => import("src/view/Auth/SingupPage"),
  },
].filter(Boolean);

const simpleRoutes = [
  { path: "/403", loader: () => import("src/view/shared/errors/Error403Page") },
  { path: "/500", loader: () => import("src/view/shared/errors/Error500page") },
  { path: "**", loader: () => import("src/view/shared/errors/Error404Page") },
];
export default {
  privateRoutes,
  publicRoutes,
  simpleRoutes,
};
