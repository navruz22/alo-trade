import React from "react";

const AddButton = ({ title, onClick, className }) => {
  return (
    <button
      className={`block uppercase shadow md:ml-0  bg-orange-500 hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white md:text-xs text-[10px] px-3 py-2 md:px-10  rounded ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default AddButton;
