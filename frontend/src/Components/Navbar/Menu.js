import React from "react";
import { map, uniqueId } from "lodash";
import { Link } from "react-router-dom";

const Menu = ({ navs, translations }) => {
  return (
    <ul class="blcok lg:flex">
      {map(navs, (nav) => (
        <li class="relative group">
          <Link
            key={uniqueId("navbar")}
            to={nav.path}
            onClick={nav.onClick}
            className="
              ud-menu-scroll
              text-base text-dark
              lg:text-white
              lg:group-hover:opacity-70
              lg:group-hover:text-white
              group-hover:text-primary
              py-2
              lg:py-6 lg:inline-flex lg:px-0
              flex
              mx-8
              lg:mr-0
            "
          >
            {nav.name}
          </Link>
        </li>
      ))}
    </ul>
    // <ul className="flex">
    //   {map(navs, (nav) => (
    //     <Link
    //       key={uniqueId("navbar")}
    //       to={nav.path}
    //       className={`py-2 px-5 text-white-900 flex items-center ${nav.navStyle}`}
    //       onClick={nav.onClick}
    //     >
    //       {nav.icon && (
    //         <span className={`pointer-events-none ${nav.style}`}>
    //           {nav.icon}
    //         </span>
    //       )}
    //       {translations[nav.name]}
    //     </Link>
    //   ))}
    // </ul>
  );
};

export default Menu;
