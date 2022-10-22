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
    name: "AloShop",
    path: "/",
    navStyle:
      "bg-black-800 font-amazonbold mx-2 rounded-md px-2 text-xl hover:bg-black-700 transition-all ease-in-out duration-300 py-3",
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
    link: "/sign-in",
    icon: <IoLogOutOutline />,
    title: "Chiqish",
    onClick: logOut,
  },
];
