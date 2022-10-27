import React from "react";

const Loader = () => {
  return (
    <div className="z-50 absolute w-full h-full">
      <div className="flex items-center justify-center w-full h-full ">
        <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
