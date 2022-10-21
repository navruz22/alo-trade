import React from "react";

const Checkbox = ({ data }) => {
  return (
    <>
      <label
        htmlFor={data.label}
        className={`flex items-center text-neutral-600 text-sm cursor-pointer ml-2 ${
          data.checked && "font-amazonbold"
        }`}
      >
        <input
          id={data.label}
          type="checkbox"
          value=""
          className="w-[1rem] h-[1rem] mr-2"
        />
        <span className="w-full">{data.label}</span>
      </label>
    </>
  );
};

export default Checkbox;
