import React from "react";
import {
  FcAbout,
  FcBriefcase,
  FcBullish,
  FcBusinessContact,
  FcGraduationCap,
  FcMms,
} from "react-icons/fc";

export default [
  {
    path: "/",
    exact: true,
    icon: <FcBullish size={25} />,
    label: "Dashboard",
  },

  {
    path: "/experience",
    exact: true,
    icon: <FcBriefcase size={25} />,
    label: "Expeience",
  },
  {
    path: "/education",
    exact: true,
    icon: <FcGraduationCap size={25} />,
    label: "Education",
  },
  {
    path: "/portfolio",
    exact: true,
    icon: <FcMms size={25} />,
    label: "Portfolio",
  },
  {
    path: "/contact",
    exact: true,
    icon: <FcBusinessContact size={25} />,
    label: "Contact",
  },
];
