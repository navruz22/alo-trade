import React, { useState } from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import { map } from "lodash";

const CardAdditional = ({
  categories,
  district,
  tradetypes,
  region,
  // status,
  subcategories,
  images,
  phone,
  organization,
  description,
  translations,
}) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(translations.koproq_malumot);
  const [icon, setIcon] = useState(
    <IoChevronDownOutline size={16} color="#0090A2" className="mt-2" />
  );
  const toggle = () => {
    setTitle(show ? translations.koproq_malumot : translations.yopish);
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
            <h3 className="text-neutral-600 text-justify py-2">
              {description}
            </h3>
            <h4 className="">
              <span className="font-amazonbold">
                {translations.koproq_malumot}:
              </span>{" "}
              <span className="lowercase ">
                {organization ? organization?.phone : phone}
              </span>
            </h4>
            <p className="">
              <span className="font-amazonbold">
                {translations.savdo_turi}:
              </span>{" "}
              <span className="lowercase ">
                {map(tradetypes, (tradetype) => tradetype.name + ", ")}
              </span>
            </p>
            <p className="">
              <span className="font-amazonbold">
                {translations.kategoriya}:
              </span>{" "}
              <span className="lowercase ">
                {map(categories, (category) => category.name + ", ")}
              </span>
            </p>
            <p className="">
              <span className="font-amazonbold">
                {translations.kategoriya_turi}:
              </span>{" "}
              <span className="lowercase ">
                {map(subcategories, (subcategory) => subcategory.name + ", ")}
              </span>
            </p>
            <p className="text-neutral-500">
              <span className="font-amazonbold mr-2">
                {translations.manzil}:
              </span>
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
