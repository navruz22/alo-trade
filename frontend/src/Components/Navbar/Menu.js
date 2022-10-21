import React from "react";
import { map, uniqueId } from "lodash";
import { Link } from "react-router-dom";

const Menu = ({ navs }) => {
  return (
    <ul className="flex">
      {map(navs, (nav, index) => (
        <Link
          key={uniqueId("navbar")}
          to={nav.path}
          className={`py-2 px-5 text-white-900 flex items-center ${nav.navStyle}`}
        >
          {nav.icon && (
            <span className={`pointer-events-none ${nav.style}`}>
              {nav.icon}
            </span>
          )}
          {nav.name}
        </Link>
      ))}
    </ul>
  );
};

export default Menu;
