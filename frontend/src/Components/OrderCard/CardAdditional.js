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
  images,
  phone,
}) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("ko'proq ma'lumot");
  const [icon, setIcon] = useState(
    <IoChevronDownOutline size={16} color="#0090A2" className="mt-2" />
  );
  const toggle = () => {
    setTitle(show ? "ko'proq ma'lumot" : "yopish");
    setIcon(
      show ? (
        <IoChevronDownOutline size={16} color="#0090A2" className="mt-2" />
      ) : (
        <IoChevronUpOutline size={16} color="#0090A2" className="mt-2" />
      )
    );
    setShow(!show);
  };
  return (
    <div className="text-neutral-500 px-3 relative">
      {show && (
        <div className="grid grid-cols-7 ">
          <div className="col-span-5">
            <p className="">
              <span className="font-amazonbold">Telefon raqam:</span>{" "}
              <span className="lowercase ">{phone}</span>
            </p>
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
          <div className="col-span-2 text-end flex justify-end">
            {images[0] && (
              <img src={images[0]} className="w-[150px]" alt="alotrade.uz" />
            )}
          </div>
        </div>
      )}

      <button onClick={toggle} className="w-full text-primary-800 ">
        <span className="w-full flex items-center pointer-events-none">
          <span className="pt-2"> {title}</span>
          <span className="">{icon}</span>
        </span>
      </button>
    </div>
  );
};

export default CardAdditional;
