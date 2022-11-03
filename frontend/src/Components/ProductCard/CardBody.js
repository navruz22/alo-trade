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
      <div className="">
        <div className="font-amazonbold text-base">
          <h3 className="inline">{name}</h3>
        </div>
      </div>
      {/*<h3 className="text-neutral-600 text-justify">{description}</h3>*/}
      <div className="">
        <h3 className="font-amazonbold text-base text-amber-500 flex justify-between">
          <span>Narxi:</span>{" "}
          <span>
            {min} - {max} {currency}
          </span>
        </h3>
      </div>
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
