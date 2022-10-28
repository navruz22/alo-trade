import React from "react";

const CardLogo = ({ logo, name }) => {
  return (
    <div className="col-span-4 bg-white-900 shadow-lg rounded-lg overflow-hidden grid grid-rows-5">
      <div className="row-span-4 flex justify-center items-center">
        <div className="w-[150px] h-[150px] rounded-full flex items-center justify-center shadow-xl bg-neutral-200 my-5 overflow-hidden">
          {logo ? (
            <img src={logo} alt={name} className="rounded w-full h-full" />
          ) : (
            <h3 className="text-xl font-amazonbold ">{name && name[0]}</h3>
          )}
        </div>
      </div>
      <div className="w-full bg-secondary-medium row-span-1">
        <div className="w-full h-[3px] bg-amber-500"></div>
        <h3 className="py-3 text-white-900 w-full text-center">
          {name && name}
        </h3>
      </div>
    </div>
  );
};

export default CardLogo;
