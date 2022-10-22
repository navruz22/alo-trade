import React from "react";

const SaveButton = ({ onClick, title, className, isDisabled }) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={`bg-primary-800 text-white-900 rounded-md py-2 px-4 hover:bg-primary-900 ${className}`}
    >
      {title}
    </button>
  );
};

export default SaveButton;
