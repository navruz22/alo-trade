import {
  IoBagAdd,
  IoBusinessSharp,
  IoLogOutOutline,
  IoPersonCircleSharp,
  IoPersonOutline,
  IoShare,
} from "react-icons/io5";

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
