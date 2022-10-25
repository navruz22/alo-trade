import React from "react";

const RadioButton = ({ label, value, onChange, name }) => {
  return (
    <label className="text-sm text-neutral-500 flex items-center ">
      <input
        name={name}
        type="radio"
        className="mr-2"
        value={value}
        onChange={onChange}
      />
      {label}
    </label>
  );
};

export default RadioButton;
