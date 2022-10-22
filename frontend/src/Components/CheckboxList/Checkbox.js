import React from "react";

const Checkbox = ({ data, onChange, checked }) => {
  return (
    <>
      <label
        htmlFor={data.label}
        className={`flex items-center text-neutral-600 text-sm cursor-pointer ml-2 w-full ${
          data.checked && "font-amazonbold"
        }`}
      >
        <input
          checked={checked}
          onChange={onChange}
          value={data.value}
          id={data.label}
          type="checkbox"
          className="w-[1rem] h-[1rem] mr-2"
        />
        <span className="w-full">{data.label}</span>
      </label>
    </>
  );
};

export default Checkbox;
