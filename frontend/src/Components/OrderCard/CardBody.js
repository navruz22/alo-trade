import React from "react";
import { IoLocationOutline } from "react-icons/io5";

const CardBody = ({
  name,
  description,
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
        <p className="font-amazonbold text-lg">
          Nomi: <span className="uppercase">{name}</span>
        </p>
        <p className="font-amazonbold text-lg text-amber-500">
          Narxi: {min} - {max} {currency}
        </p>
      </div>
      <p className="text-neutral-600 text-justify">{description}</p>
      <p className="mt-1 flex items-center text-neutral-500 text-sm">
        <IoLocationOutline className="" />
        <span className="ml-2">{region.name}</span>
      </p>
    </div>
  );
};

export default CardBody;
