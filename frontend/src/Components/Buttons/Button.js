import React from "react";

const Button = ({ title, onClick, isDisabled }) => {
  return (
    <div className="w-full my-2">
      <button
        disabled={isDisabled}
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-500 block  w-full text-white-900 py-1 font-semibold rounded"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
