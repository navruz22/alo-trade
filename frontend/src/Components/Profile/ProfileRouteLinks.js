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
    <div className="max-w-[400px] w-1/3 w-full flex flex-col px-2">
      {map(menu, (item) => (
        <Link
          onClick={() => linkHandler(item.path)}
          key={uniqueId("profileRouteLinks")}
          className={`${
            path === item.path && "bg-white-900 text-neutral-900"
          } flex my-1 items-center text-base py-3 hover:bg-white-900 rounded text-neutral-700 hover:text-neutral-900`}
          to={item.path}
        >
          <span className="px-2">{item.icon}</span>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default ProfileRouteLinks;
