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
    path: "/contact",
    exact: true,
    icon: <FcBusinessContact size={25} />,
    label: "Contact",
  },
  {
    path: "/Expeience",
    exact: true,
    icon: <FcBriefcase size={25} />,
    label: "Expeience",
  },
  {
    path: "/Education",
    exact: true,
    icon: <FcGraduationCap size={25} />,
    label: "Education",
  },
  {
    path: "/Portfolio",
    exact: true,
    icon: <FcMms size={25} />,
    label: "Portfolio",
  },
  {
    path: "/profile",
    exact: true,
    icon: <FcAbout size={25} />,
    label: "About",
  },
];
