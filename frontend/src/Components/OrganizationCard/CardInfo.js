import React from "react";
import { MdOutlineCategory } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { map, uniqueId } from "lodash";

const CardInfo = ({
  district,
  region,
  categories,
  subcategories,
  tradetypes,
  phone,
  email,
}) => {
  const icons = [
    <MdOutlineCategory />,
    <BiCategory />,
    <IoCallOutline />,
    <IoLocationOutline />,
  ];
  const types = ["Savdo turi:", "Kategoriyasi:", "Telefon raqam:", "Manzil:"];
  const infos = [
    `${map(tradetypes, (tradetype) => tradetype.name).join(", ")}`,
    `${map(categories, (category) => category.name).join(", ")}, ${map(
      subcategories,
      (subcategory) => subcategory.name
    ).join(", ")}`,
    `Tel: ${phone}`,
    `${region.name}, ${district.name}`,
  ];
  return (
    <div className="col-span-8 bg-white-900 shadow-lg rounded-lg overflow-hidden grid grid-cols-7">
      <div className="bg-secondary-medium grid grid-rows-6  ">
        {map(icons, (icon, index) => (
          <div
            key={uniqueId("cardInfo")}
            className="text-white-900 text-end w-full flex items-center justify-end px-2 text-lg"
          >
            <p className="bg-amber-500 rounded-full p-1">{icon}</p>
          </div>
        ))}
        <div className="bg-amber-500"></div>
      </div>
      <div className="grid grid-rows-6 col-span-2  ">
        {map(types, (type) => (
          <div
            key={uniqueId("type")}
            className="flex items-center text-neutral-500 font-amazonbold px-2 uppercase text-[14px]"
          >
            {type}
          </div>
        ))}
      </div>
      <div className="grid grid-rows-6 col-span-4  ">
        {map(infos, (info) => (
          <div
            key={uniqueId("infos")}
            className="flex items-center text-neutral-600 px-2 text-sm font-amazonbold"
          >
            {info}
          </div>
        ))}
        <div className="bg-amber-500"></div>
      </div>
    </div>
  );
};

export default CardInfo;
