import React from "react";
import AddButton from "../Buttons/AddButton";
import RadioButtonList from "../RadioButtons/RadioButtonList";
import Pagination from "../Pagination/Pagination";

const PageHeader = ({
  onClick,
  buttonTitle,
  countTitle,
  count,
  handleFilter,
  filterData,
  filter,
  translations,
  setFilterVisible,
  setFilterBody,
}) => {
  return (
    <div className="flex justify-between shadow w-full px-5 py-3 items-center bg-white">
      <div className="hidden md:flex gap-2">
        <span className="text-[12px] md:text-[16px]">{countTitle}</span>{" "}
        <span className="font-amazonbold text-[12px] md:text-[16px] text-primary-900">
          {count.toLocaleString()} {translations?.ta}
        </span>
        {/* <div className="flex">
          <RadioButtonList
            translations={translations}
            list={filter}
            onChange={handleFilter}
            currency={filterData}
          />
        </div> */}
      </div>
      <div className="flex gap-2 md:gap-4 md:hidden">
        <button
          className={`bg-[#03c1f6cc] shadow-lg text-[10px] md:text-[16px] text-white cursor-pointer px-4 py-2 md:px-3 md:py-1 text-center justify-center items-center rounded-xl flex space-x-2 flex-row`}
          onClick={() => {
            setFilterBody("category");
            setFilterVisible(true);
          }}
        >
          Категории
        </button>
        <button
          className={`bg-[#03c1f6cc] shadow-lg text-[10px] md:text-[16px] text-white cursor-pointer px-2 py-1 md:px-3 md:py-1 text-center justify-center items-center rounded-xl flex space-x-2 flex-row`}
          onClick={() => {
            setFilterBody("country");
            setFilterVisible(true);
          }}
        >
          Страны
        </button>
      </div>
      <div>
        <AddButton onClick={onClick} title={buttonTitle} />
      </div>
    </div>
  );
};

export default PageHeader;
