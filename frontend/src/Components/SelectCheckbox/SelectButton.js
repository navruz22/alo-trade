import React from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

const SelectButton = ({ data, onClick, currentId }) => {
  return (
    <button
      className="w-full flex pl-2 items-center text-neutral-600 justify-between hover:bg-gray-200 "
      onClick={onClick}
      name={data.value}
    >
      <span className="text-left pointer-events-none ">{data.label}</span>{" "}
      <span className="mt-1 px-5 pointer-events-none  ">
        {currentId === data.value ? (
          <IoChevronUpOutline />
        ) : (
          <IoChevronDownOutline />
        )}
      </span>
    </button>
  );
};

export default SelectButton;
