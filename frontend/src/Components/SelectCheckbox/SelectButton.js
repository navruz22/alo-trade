import React from "react";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";
import Checkbox from "../CheckboxList/Checkbox";

const SelectButton = ({
  data,
  onClick,
  currentId,
  changeHeader,
  headerCheckeds,
  checkBoxClass,
}) => {
  const checked = headerCheckeds?.some((checked) => checked === data.value);
  return (
    <div className="flex justify-between w-full hover:bg-gray-200 ">
      <Checkbox
        data={data}
        onChange={changeHeader}
        checked={checked}
        className={checkBoxClass}
      />
      <button
        className=" flex pl-2 items-center text-neutral-600 justify-between text-end "
        onClick={onClick}
        name={data.value}
      >
        <span className="mt-1 px-5 pointer-events-none w-full text-end  ">
          {currentId === data.value ? (
            <IoChevronUpOutline />
          ) : (
            <IoChevronDownOutline />
          )}
        </span>
      </button>
    </div>
  );
};

export default SelectButton;
