import React from "react";

const AddButton = ({ title, onClick, className }) => {
  return (
    <button
      className={` bg-primary-800 text-white-900 rounded px-3 py-1 hover:bg-primary-900 ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default AddButton;
