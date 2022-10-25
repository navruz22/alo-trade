import React from "react";
import AddButton from "../Buttons/AddButton";

const PageHeader = ({ onClick, buttonTitle, countTitle, count }) => {
  return (
    <div className="flex justify-between shadow w-full px-5 py-3 items-center bg-white-900">
      <div>
        <span>{countTitle}</span>{" "}
        <span className="font-amazonbold text-primary-900">
          {count.toLocaleString()} ta
        </span>
      </div>
      <div>
        <AddButton onClick={() => onClick("createOrder")} title={buttonTitle} />
      </div>
    </div>
  );
};

export default PageHeader;
