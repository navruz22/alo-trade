import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { map, uniqueId } from "lodash";
import { useTranslation } from "react-i18next";
import { getTranslations } from "../../translation";

const ProfileRouteLinks = ({ menu }) => {
  const { t } = useTranslation();
  const translations = getTranslations(t);
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  const linkHandler = (e) => {
    setPath(e);
  };

  return (
    <div className="flex overflow-x-scroll md:max-w-[400px] md:w-1/3 w-full py-4 md:py-0 flex md:flex-col px-2 bg-alotrade">
      {map(menu, (item) => (
        <Link
          onClick={() => linkHandler(item.path)}
          key={uniqueId("profileRouteLinks")}
          className={` flex shadow-lg min-w-[100px]  ${
            (path === item.path && "bg-orange-500 text-white") ||
            "bg-white text-alotrade "
          } font-bold text-white my-1 w-full justify-center md:justify-start items-center text-[12px] md:text-base py-3 ${
            item.class && item.class
          }`}
          to={item.path}
        >
          <span className="px-2 hidden md:inline">{item.icon}</span>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default ProfileRouteLinks;
