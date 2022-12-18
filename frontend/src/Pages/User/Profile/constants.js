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
import MyOrders from "../../../Components/Profile/MyOrders";

export const menuUser = [
  {
    path: "/profile/user",
    title: "Пользователь",
    icon: <IoPersonCircleOutline size={26} color={"#444"} />,
    class: "rounded-l-xl md:rounded",
  },
  {
    path: "/profile/orders",
    title: "Мои заказы",
    icon: <MdOutlineProductionQuantityLimits size={26} color={"#444"} />,
    class: "rounded-none md:rounded",
  },
  {
    path: "/profile/password",
    title: "Пароль",
    icon: <IoKeyOutline size={26} color={"#444"} />,
    class: "rounded-r-xl md:rounded",
  },
];

export const menuOrganization = [
  {
    path: "/profile/user",
    title: "Пользователь",
    icon: <IoPersonCircleOutline size={26} color={"#444"} />,
    class: "rounded-l-xl md:rounded",
  },
  {
    path: "/profile/organization",
    title: "Компания",
    icon: <IoBusinessSharp size={26} color={"#444"} />,
    class: "rounded-none md:rounded",
  },
  {
    path: "/profile/products",
    title: "Мои товары",
    icon: <MdOutlineProductionQuantityLimits size={26} color={"#444"} />,
    class: "rounded-none md:rounded",
  },
  {
    path: "/profile/orders",
    title: "Мои заказы",
    icon: <MdOutlineProductionQuantityLimits size={26} color={"#444"} />,
    class: "rounded-none md:rounded",
  },
  {
    path: "/profile/password",
    title: "Пароль",
    icon: <IoKeyOutline size={26} color={"#444"} />,
    class: "rounded-r-xl md:rounded",
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
    path: "/orders",
    element: <MyOrders />,
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
