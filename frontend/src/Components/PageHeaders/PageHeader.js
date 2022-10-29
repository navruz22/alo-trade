import React from "react";
import AddButton from "../Buttons/AddButton";
import RadioButtonList from "../RadioButtons/RadioButtonList";

const PageHeader = ({
  onClick,
  buttonTitle,
  countTitle,
  count,
  handleFilter,
  filterData,
  filter,
}) => {
  return (
    <div className="flex justify-between shadow w-full px-5 py-3 items-center bg-white-900">
      <div>
        <div>
          <span>{countTitle}</span>{" "}
          <span className="font-amazonbold text-primary-900">
            {count.toLocaleString()} ta
          </span>
        </div>
        <div className="flex">
          <RadioButtonList
            list={filter}
            onChange={handleFilter}
            currency={filterData}
          />
        </div>
      </div>
      <div>
        <AddButton onClick={onClick} title={buttonTitle} />
      </div>
    </div>
  );
};

export default PageHeader;
