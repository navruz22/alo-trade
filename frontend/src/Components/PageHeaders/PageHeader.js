import React from "react";
import AddButton from "../Buttons/AddButton";
import RadioButtonList from "../RadioButtons/RadioButtonList";
import Pagination from "../Pagination/Pagination";

const PageHeader = ({
  isOrganization,
  onClick,
  buttonTitle,
  countTitle,
  count,
  handleFilter,
  filterData,
  filter,
  currentPage,
  countPage,
  totalDatas,
  setCurrentPage,
}) => {
  console.log(isOrganization);
  return (
    <div className="flex  justify-between shadow w-full px-5 py-3 items-center bg-white-900">
      {isOrganization && (
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
      )}
      {totalDatas > 0 && (
        <div className="flex justify-center">
          <Pagination
            totalDatas={totalDatas}
            currentPage={currentPage}
            countPage={countPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}

      {isOrganization && (
        <div>
          <AddButton onClick={onClick} title={buttonTitle} />
        </div>
      )}
    </div>
  );
};

export default PageHeader;
