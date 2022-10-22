import {
  IoBusinessSharp,
  IoKeyOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";
import React from "react";
import EditUser from "../../../Components/Profile/EditUser";
import { Navigate } from "react-router-dom";
import EditPassword from "../../../Components/Profile/EditPassword";
import EditOrganization from "../../../Components/Profile/EditOrganization";

export const menu = [
  {
    path: "/profile/user",
    title: "Foydalanuvchi",
    icon: <IoPersonCircleOutline size={26} color={"#444"} />,
  },
  {
    path: "/profile/organization",
    title: "Tashkilot",
    icon: <IoBusinessSharp size={26} color={"#444"} />,
  },
  {
    path: "/profile/password",
    title: "Parol",
    icon: <IoKeyOutline size={26} color={"#444"} />,
  },
];

export const routes = [
  {
    path: "/user",
    element: <EditUser />,
  },
  {
    path: "/organization",
    element: <EditOrganization />,
  },
  {
    path: "/password",
    element: <EditPassword />,
  },
  {
    path: "*",
    element: <Navigate to={"/user"} replace={true} />,
  },
];
