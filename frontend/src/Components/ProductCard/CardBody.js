import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const CardBody = ({
  name,
  // description,
  minPrice,
  maxPrice,
  currency,
  region,
}) => {
  const min = minPrice ? minPrice.toLocaleString("ru-RU") : 0;
  const max = maxPrice ? maxPrice.toLocaleString("ru-RU") : 0;
  return (
    <div className="px-3 py-2">
      <div className="flex justify-between">
        <div className="font-amazonbold text-lg">
          Nomi: <h3 className="uppercase inline">{name}</h3>
        </div>
        <h3 className="font-amazonbold text-lg text-amber-500">
          Narxi: {min} - {max} {currency}
        </h3>
      </div>
      {/*<h3 className="text-neutral-600 text-justify">{description}</h3>*/}
      <p className="mt-1 flex items-center text-neutral-500 text-sm">
        <IoLocationOutline className="" />
        <span className="ml-2">
          {region ? region?.name : "Respublika bo'ylab"}
        </span>
      </p>
    </div>
  );
};

export default CardBody;
