import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import TextTruncate from "react-text-truncate";
import useWindowSize from "../../hooks/useWindowSize";

const CardBody = ({
  name,
  // description,
  minPrice,
  maxPrice,
  currency,
  region,
}) => {
  const { width } = useWindowSize();
  const min = minPrice ? minPrice.toLocaleString("ru-RU") : 0;
  const max = maxPrice ? maxPrice.toLocaleString("ru-RU") : 0;
  return (
    <div className="px-3 py-2 rounded-b-xl">
      <div className="">
        <div className="font-amazonbold text-[12px] md:text-base font-bold">
          <TextTruncate
            line={width < 720 ? 3 : 2}
            element="h3"
            truncateText="…"
            text={name}
          />
          {/* <h3 className="inline">{name}</h3> */}
        </div>
      </div>
      {/*<h3 className="text-neutral-600 text-justify">{description}</h3>*/}
      <div className="">
        <h3 className="font-amazonbold text-base text-amber-500 flex justify-between">
          {/* <span className=" hidden md:inline">Narxi:</span>{" "} */}
          <span className="text-[12px] md:text-[16px] text-[#11ed1c] font-bold">
            {(max && `${min} - ${max}`) || ""} {currency}
          </span>
        </h3>
      </div>
    </div>
  );
};

export default CardBody;
