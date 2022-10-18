import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <div className="w-full my-2">
      <button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-600 block  w-full text-white py-1 font-semibold rounded"
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
