import React from "react";
import {
  IoBusinessSharp,
  IoKeyOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import EditUser from "../../../Components/Profile/EditUser";
import { Navigate } from "react-router-dom";
import EditPassword from "../../../Components/Profile/EditPassword";
import EditOrganization from "../../../Components/Profile/EditOrganization";
import MyProducts from "../../../Components/Profile/MyProducts";

export const menu = [
  {
    path: "/profile/user",
    title: "Пользователь",
    icon: <IoPersonCircleOutline size={26} color={"#444"} />,
  },
  {
    path: "/profile/organization",
    title: "Компания",
    icon: <IoBusinessSharp size={26} color={"#444"} />,
  },
  {
    path: "/profile/products",
    title: "Товары",
    icon: <MdOutlineProductionQuantityLimits size={26} color={"#444"} />,
  },
  {
    path: "/profile/password",
    title: "Пароль",
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
    path: "/products",
    element: <MyProducts />,
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
