import React, { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { map } from "lodash";

const CardAdditional = ({
  categories,
  district,
  tradetypes,
  region,
  status,
  subcategories,
}) => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  return (
    <div className="text-neutral-500 px-3 relative">
      {show && (
        <div className="grid grid-cols-7 ">
          <div className="col-span-5">
            <p className="">
              <span className="font-amazonbold">Savdo turi:</span>{" "}
              <span className="lowercase ">
                {map(tradetypes, (tradetype) => tradetype.name + ", ")}
              </span>
            </p>
            <p className="">
              <span className="font-amazonbold">Kategoriyasi:</span>{" "}
              <span className="lowercase ">
                {map(categories, (category) => category.name + ", ")}
              </span>
            </p>
            <p className="">
              <span className="font-amazonbold">Kategoriyasi turlari:</span>{" "}
              <span className="lowercase ">
                {map(subcategories, (subcategory) => subcategory.name + ", ")}
              </span>
            </p>
            <p className="text-neutral-500">
              <span className="font-amazonbold mr-3">Xolati:</span>
              <span className="lowercase ">
                {map(status, (stat) => stat + ", ")}
              </span>
            </p>
            <p className="text-neutral-500">
              <span className="font-amazonbold mr-2">Manzil:</span>
              {region?.name}, {district?.name}
            </p>
          </div>
          <div className="col-span-2"></div>
        </div>
      )}

      <button onClick={toggle} className="w-full">
        {show ? (
          <IoChevronUpOutline size={18} color="#0090A2" />
        ) : (
          <IoChevronDownOutline size={18} color="#0090A2" />
        )}
      </button>
    </div>
  );
};

export default CardAdditional;
