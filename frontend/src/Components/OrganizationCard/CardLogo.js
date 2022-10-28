import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const CardLogo = ({ logo, name, district, region }) => {
  return (
    <div className="flex items-center p-4 pb-2">
      <div className="w-[70px] h-[70px] flex items-center justify-center  mr-4">
        {logo ? (
          <img
            src={logo}
            alt={name[0]}
            className="w-[70px] h-[70px] rounded-full bg-neutral-200"
          />
        ) : (
          <h3 className="w-[70px] h-[70px] rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 text-lg">
            alo
          </h3>
        )}
      </div>
      <div>
        <h3 className="text-neutral-600 text-lg font-amazonbold">{name}</h3>
        <div className="flex items-center text-neutral-500">
          <IoLocationOutline />
          <h3 className="ml-3 text-sm">
            {region?.name}, {district?.name}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CardLogo;
