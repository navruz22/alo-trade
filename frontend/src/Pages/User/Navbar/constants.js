import {
  IoBagAdd,
  IoBusinessSharp,
  IoLogOutOutline,
  IoPersonCircleSharp,
  IoPersonOutline,
  IoShare,
} from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { RiListUnordered } from "react-icons/ri";
import { BsFillChatRightDotsFill } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaWarehouse } from "react-icons/fa";

export const navs = [
  {
    name: "Заявки",
    path: "/orders",
    icon: <IoShare size={20} color="white" />,
    style: "mr-2",
    navStyle: "border-r",
  },
  {
    name: "Чат",
    path: "/offers",
    icon: <IoShare size={20} color="white" />,
    style: "rotate-180 mr-2 mt-1",
  },
  {
    name: "Товары",
    path: "/products",
    icon: <IoBagAdd size={20} color="white" />,
    style: "mr-2",
  },
  {
    name: "Поставщики",
    path: "/organizations",
    icon: <IoBusinessSharp size={20} color="white" />,
    style: "mr-2",
    navStyle: "border-l",
  },
];

export const mobileNavs = [
  {
    name: "Главгая",
    path: "/",
    icon: <AiFillHome color="white" />,
  },
  {
    name: "Заявки",
    path: "/orders",
    icon: <RiListUnordered color="white" />,
    style: "mr-2",
    navStyle: "border-r",
  },
  {
    name: "Чат",
    path: "/offers",
    icon: <BsFillChatRightDotsFill color="white" />,
    style: "rotate-180 mr-2 mt-1",
  },
  {
    name: "Товары",
    path: "/products",
    icon: <MdProductionQuantityLimits color="white" />,
    style: "mr-2",
  },
  {
    name: "Поставщики",
    path: "/organizations",
    icon: <FaWarehouse color="white" />,
    style: "mr-2",
    navStyle: "border-l",
  },
];

export const guestNavs = ["offers"];

export const toggleMenu = (logOut, closeMenu) => [
  {
    link: "/profile/user",
    icon: <IoPersonOutline />,
    title: "Профиль",
    onClick: closeMenu,
  },
  {
    link: "/",
    icon: <IoLogOutOutline />,
    title: "Выход",
    onClick: logOut,
  },
];

export const getTranslations = (t) => {
  const translations = {
    Buyurtmalar: t("Buyurtmalar"),
    Xabar: t("Xabar"),
    AloTrade: t("AloTrade"),
    Kompaniyalar: t("Kompaniyalar"),
    Profile: t("Profile"),
    kirish: t("kirish"),
  };

  return translations;
};
