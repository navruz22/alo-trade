import React, { useState } from "react";
import AddButton from "../Buttons/AddButton";
import RadioButtonList from "../RadioButtons/RadioButtonList";
import Pagination from "../Pagination/Pagination";
import { IoSearchOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { filterName } from "../../Pages/Filter/filterSlice";
import { GoSettings } from "react-icons/go";
import { AiOutlineGlobal } from "react-icons/ai";

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
  isOrganization,
  filterBtnClick,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const enterHandler = (e) => {
    if (e.key === "Enter") {
      dispatch(filterName(name));
    }
  };

  const handleSearch = () => {
    dispatch(filterName(name));
  };

  return (
    <div className="bg-alotrade md:bg-white w-full pt-6">
      <div className="flex flex-col items-center md:flex-row w-full md:justify-between md:items-center">
        <div className="flex w-full px-4 md:gap-4 md:justify-center mb-[20px] md:hidden">
          <button
            className={`flex items-center justify-center gap-2 w-full  md:w-auto uppercase shadow bg-white md:ml-0 rounded-tr-none rounded-br-none
             rounded-l-xl border-r-0 border-1 border-[#03c1f6cc]
             font-bold focus:shadow-outline focus:outline-none text-alotrade md:text-xs text-[12px]
              py-3 md:px-10 px-2 rounded`}
            onClick={() => {
              setFilterBody("category");
              setFilterVisible(true);
            }}
          >
            <GoSettings size={20} className="text-alotrade" />
            <span>Категории</span>
          </button>
          <button
            className={`flex items-center justify-center gap-2 w-full bg-white md:w-auto uppercase shadow md:ml-0 rounded-tl-none rounded-bl-none
             ${
               buttonTitle && !isOrganization
                 ? "rounded-r-none"
                 : "rounded-r-xl"
             } border-l-0 border-1 border-[#03c1f6cc]
             font-bold focus:shadow-outline focus:outline-none text-alotrade md:text-xs text-[12px]
              py-3 md:px-10 px-2 rounded`}
            onClick={() => {
              setFilterBody("country");
              setFilterVisible(true);
            }}
          >
            <AiOutlineGlobal size={20} className="text-alotrade" />
            <span>Страны</span>
          </button>
          {buttonTitle && !isOrganization && (
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
        <div className="flex w-full mb-4 md:mb-0 h-[40px] px-2 md:px-0">
          <button
            onClick={filterBtnClick}
            className="bg-alotrade py-1 px-4 hidden md:flex items-center gap-2 text-[18px] font-bold text-white rounded-xl mr-[80px]"
          >
            <GoSettings color="#fff" /> <span>Каталог</span>
          </button>
          <div className="w-[400px] flex">
            <input
              onKeyUp={enterHandler}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full border rounded-l-xl px-3 text-[18px] py-1 outline-0"
              placeholder={"Поиск"}
            />
            <button
              onClick={handleSearch}
              className="rounded-r-xl w-1/5 bg-alotrade text-white border border-l-0 flex justify-center items-center"
            >
              <IoSearchOutline />
            </button>
          </div>
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
