import {
  IoBagAdd,
  IoBusinessSharp,
  IoLogOutOutline,
  IoPersonOutline,
  IoShare,
} from "react-icons/io5";
import React from "react";

export const navs = [
  {
    name: "Buyurtmalar",
    path: "/orders",
    icon: <IoShare size={20} color="white" />,
    style: "mr-2",
    navStyle: "border-r",
  },
  {
    name: "Takliflar",
    path: "/offers",
    icon: <IoShare size={20} color="white" />,
    style: "rotate-180 mr-2 mt-1",
  },
  {
    name: "AloTrade",
    path: "/",
    navStyle:
      "bg-white-900 text-secondary-medium font-amazonbold mx-2 rounded-md px-2 text-xl hover:bg-secondary-medium hover:text-white-900 transition-all ease-in-out duration-300 py-3",
    style: "mr-2",
  },
  {
    name: "Mahsulotlar",
    path: "/products",
    icon: <IoBagAdd size={20} color="white" />,
    style: "mr-2",
  },
  {
    name: "Kompaniyalar",
    path: "/organizations",
    icon: <IoBusinessSharp size={20} color="white" />,
    style: "mr-2",
    navStyle: "border-l",
  },
];

export const toggleMenu = (logOut, closeMenu) => [
  {
    link: "/profile/user",
    icon: <IoPersonOutline />,
    title: "Profile",
    onClick: closeMenu,
  },
  {
    link: "/",
    icon: <IoLogOutOutline />,
    title: "Chiqish",
    onClick: logOut,
  },
];
