import React from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

const MainPageHeader = ({
  setCurrentPage,
  countPage,
  totalDatas,
  currentPage,
  translations,
}) => {
  return (
    <div className="w-full shadow-md bg-white-900 p-3 flex flex-row items-center py-4 justify-between">
      <div className="w-[24rem] flex justify-between  ">
        <Link
          to="/sign-up"
          className="bg-primary-800 w-[11rem] block py-2 text-center rounded text-white-900 mr-3"
        >
          {translations.buyurtma_berish}
        </Link>
        <Link
          to="/companyregister"
          className="bg-primary-800 w-[10rem] block py-2 text-center rounded text-white-900"
        >
          {translations.tashkilot_yaratish}
        </Link>
      </div>
      <div className="w-full">
        {totalDatas.length > 0 && (
          <Pagination
            totalDatas={totalDatas}
            countPage={countPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        )}
      </div>
    </div>
  );
};

export default MainPageHeader;
