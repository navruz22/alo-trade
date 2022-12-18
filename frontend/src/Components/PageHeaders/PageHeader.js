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
  mainTitle,
}) => {
  return (
    <div className="bg-alotrade md:bg-white w-full pt-6">
      <div className="w-full block md:hidden">
        <h2 className="text-center text-white text-[20px] mb-2 md:mb-0 md:text-[21px]">
          {mainTitle}
        </h2>
      </div>
      <div className="flex w-full md:justify-end">
        {/* <div className="hidden md:flex gap-2">
        <span className="text-[12px] md:text-[16px]">{countTitle}</span>{" "}
        <span className="font-amazonbold text-[12px] md:text-[16px] text-primary-900">
          {count.toLocaleString()} {translations?.ta}
        </span>
        <div className="flex">
          <RadioButtonList
            translations={translations}
            list={filter}
            onChange={handleFilter}
            currency={filterData}
          />
        </div>
      </div> */}
        <div className="flex w-full px-4 md:gap-4 md:justify-center mb-[20px] md:hidden">
          <button
            className={`block w-full  md:w-auto uppercase shadow bg-white md:ml-0 rounded-tr-none rounded-br-none
             rounded-l-xl border-r-0 border-1 border-[#03c1f6cc]
             font-bold focus:shadow-outline focus:outline-none text-alotrade md:text-xs text-[10px]
              py-3 md:px-10 px-2 rounded`}
            onClick={() => {
              setFilterBody("category");
              setFilterVisible(true);
            }}
          >
            Категории
          </button>
          <button
            className={`block w-full bg-white md:w-auto uppercase shadow md:ml-0 rounded-tl-none rounded-bl-none
             ${
               buttonTitle ? "rounded-r-none" : "rounded-r-xl"
             } border-l-0 border-1 border-[#03c1f6cc]
             font-bold focus:shadow-outline focus:outline-none text-alotrade md:text-xs text-[10px]
              py-3 md:px-10 px-2 rounded`}
            onClick={() => {
              setFilterBody("country");
              setFilterVisible(true);
            }}
          >
            Страны
          </button>
          {buttonTitle && (
            <button
              className={`block w-full bg-white md:w-auto uppercase shadow md:ml-0 rounded-tl-none rounded-bl-none
             rounded-r-xl border-l-0 border-1 border-[#03c1f6cc]
             font-bold focus:shadow-outline focus:outline-none text-alotrade md:text-xs text-[10px]
              py-3 md:px-10 px-2 rounded`}
              onClick={onClick}
            >
              {buttonTitle}
            </button>
          )}
        </div>
        {buttonTitle && (
          <div className="hidden md:block">
            <AddButton onClick={onClick} title={buttonTitle} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
