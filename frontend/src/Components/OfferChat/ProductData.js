import React from "react";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { map, uniqueId } from "lodash";

const ProductData = ({ data, translations }) => {
  if (!data) return null;
  const organization = data?.organization;
  const user = data?.user;
  const whois = organization
    ? translations.tashkilot + ": " + organization?.name
    : translations.foydalanuvchi +
      ": " +
      user?.firstname +
      " " +
      user?.lastname;
  return (
    <>
      <h2 className="font-amazonbold py-2 text-lg border-y border-neutral-300">
        {whois}
      </h2>
      <h3 className="font-amazonbold py-1">{data?.name}</h3>
      <h4 className="py-2 mb-2">{data?.description}</h4>
      <p className="flex items-center text-neutral-600 text-sm">
        <span className="mr-2">
          <IoLocationOutline />
        </span>
        <span>
          {data?.region?.name}, {data?.district?.name}
        </span>
      </p>
      <p className="flex items-center text-neutral-600 text-sm">
        <span className="mr-2">
          <IoCallOutline />
        </span>
        <span>{data?.organization?.phone || data?.user?.phone}</span>
      </p>
      <p className="flex items-center text-neutral-600 text-sm">
        <span className="pr-2 font-amazonbold">
          {translations.savdo_turi}:{" "}
        </span>{" "}
        <span>
          {data?.tradetypes &&
            map(data?.tradetypes, (tradetype) => tradetype?.name + ", ")}
        </span>
      </p>
      <p className="flex items-center text-neutral-600 text-sm">
        <span className="pr-2 font-amazonbold">
          {translations.kategoriya}:{" "}
        </span>{" "}
        <span>
          {data?.categories &&
            map(data?.categories, (category) => category?.name + ", ")}
        </span>
      </p>
      <p className="flex items-center text-neutral-600 text-sm">
        <span className="pr-2 font-amazonbold">
          {translations.kategoriya_turi}:{" "}
        </span>{" "}
        <span>
          {data?.subcategories &&
            map(data?.subcategories, (subcategory) => subcategory?.name + ", ")}
        </span>
      </p>
      <p className="flex items-center justify-between text-neutral-600 text-lg py-2 my-2 border-y border-neutral-300">
        <span className="pr-2 font-amazonbold">{translations.narxi}: </span>{" "}
        <span className="text-amber-500 font-amazonbold ">
          {data?.minPrice
            ? data?.minPrice?.toLocaleString("ru-RU") + " - "
            : ""}{" "}
          {data?.maxPrice?.toLocaleString("ru-RU")} {data?.currency}
        </span>
      </p>
      <div className="grid grid-cols-2 gap-4">
        {data?.images &&
          map(data?.images, (image) => (
            <div
              key={uniqueId("productImage")}
              className="w-full flex items-center justify-center rounded bg-white-900 "
            >
              <img className="" alt="alotrade" src={image} />
            </div>
          ))}
      </div>
    </>
  );
};

export default ProductData;
