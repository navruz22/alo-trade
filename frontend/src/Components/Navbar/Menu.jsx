import React from "react";
import { map, uniqueId } from "lodash";

const Menu = () => {
  const menus = [
    {
      name: "Buyurtmalar",
      link: "/orders",
    },
    {
      name: "Mahsulotlar",
      link: "/products",
    },
    {
      name: "Takliflar",
      link: "/offers",
    },
  ];
  return (
    <div className=" ">
      <ul className="flex flex-row">
        {map(menus, (menu, key) => (
          <li
            className="flex flex-row justify-between items-center gap-4"
            key={uniqueId("menu" + key)}
          >
            <a href={menu.link} className="flex flex-row items-center gap-2">
              <span className="text-sm">{menu.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
