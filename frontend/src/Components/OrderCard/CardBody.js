import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const CardBody = ({ name, maxPrice, currency, region, translations }) => {
  const max = maxPrice ? maxPrice.toLocaleString("ru-RU") : 0;
  return (
    <div className="px-3 py-2">
      <div className="flex justify-between">
        <div className="font-amazonbold text-lg">
          {translations.nomi}: <h3 className="uppercase inline">{name}</h3>
        </div>
        <h3 className="font-amazonbold text-lg text-amber-500">
          {translations.narxi}:{" "}
          {currency === "Договорная" ? currency : max + " " + currency}
        </h3>
      </div>
      <p className="mt-1 flex items-center text-neutral-500 text-sm">
        <IoLocationOutline className="" />
        <span className="ml-2">{region?.name}</span>
      </p>
    </div>
  );
};

export default CardBody;
