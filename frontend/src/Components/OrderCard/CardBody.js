import React from "react";

const CardBody = ({ name, description, minPrice, maxPrice, currency }) => {
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
    </div>
  );
};

export default CardBody;
