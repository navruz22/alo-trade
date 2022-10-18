import React, { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Input = ({
  placeholder,
  type = "text",
  label,
  value,
  margin,
  onChange,
  onKeyUp,
  defaultValue = "",
}) => {
  const [showPassword, setShowPassword] = useState(type === "password");
  const [inputType, setInputType] = useState(type);
  const changeShowPassword = (e) => {
    e.preventDefault();
    setInputType(showPassword ? "text" : "password");
    setShowPassword(!showPassword);
  };

  return (
    <div className={`py-2 w-full flex flex-col ${margin}`}>
      {label && (
        <label className="text-gray-500 font-semibold text-sm">{label}</label>
      )}
      <div className="w-full relative">
        <input
          onKeyUp={onKeyUp}
          onChange={onChange}
          value={value}
          defaultValue={defaultValue}
          type={inputType}
          placeholder={placeholder}
          className="w-full text-sm  bg-white outline-0 py-[.425rem] px-3 rounded border my-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {type === "password" && (
          <button
            onClick={changeShowPassword}
            className="absolute right-3 top-2"
          >
            {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
