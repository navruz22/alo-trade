import React, { useEffect } from "react";
import CheckboxList from "../../Components/CheckboxList/CheckboxList";
import SelectCheckbox from "../../Components/SelectCheckbox/SelectCheckbox";
import { useDispatch, useSelector } from "react-redux";
import { filter } from "lodash";
import {
  filterCategories,
  filterDistricts,
  filterRegions,
  filterSubcategories,
  filterTradeTypes,
} from "./filterSlice";
import { useTranslation } from "react-i18next";
import { getTranslations } from "../../translation";
import useWindowSize from "../../hooks/useWindowSize";
import closeIcon from "../../assets/close.svg";
import { useLocation, useParams } from "react-router-dom";

const Filter = ({ filterVisible, setFilterVisible, filterBody }) => {
  const { t } = useTranslation(["common"]);
  const { Filter, savdo_turi, davlatlar, kategoriyalar } = getTranslations(t);

  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const location = useLocation();

  const {
    tradetypes,
    categories: categoriesList,
    subcategories,
    districts,
    regions: regionsList,
  } = useSelector((state) => state.filter);

  const { categoriesWithSubcategories: categories } = useSelector(
    (state) => state.categories
  );
  const { tradetypes: tradeTypes } = useSelector((state) => state.trade);
  const { regions } = useSelector((state) => state.regions);

  const changeTradeTypes = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    const filtered = filter(tradetypes, (tradetype) => tradetype !== value);
    dispatch(
      checked
        ? filterTradeTypes([...filtered, value])
        : filterTradeTypes([...filtered])
    );
  };

  const changeCategories = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    const filtered = filter(categoriesList, (category) => category !== value);
    const newCategories = checked ? [...filtered, value] : [...filtered];
    dispatch(filterCategories(newCategories));
  };

  const changeSubcategories = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    const filtered = filter(
      subcategories,
      (subcategory) => subcategory !== value
    );
    const newSubcategories = checked ? [...filtered, value] : [...filtered];
    dispatch(filterSubcategories(newSubcategories));
  };

  const changeRegions = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    const filtered = filter(regionsList, (region) => region !== value);
    const newRegions = checked ? [...filtered, value] : [...filtered];
    dispatch(filterRegions(newRegions));
  };

  const changeDistricts = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    const filtered = filter(districts, (district) => district !== value);
    const newDistricts = checked ? [...filtered, value] : [...filtered];
    dispatch(filterDistricts(newDistricts));
  };

  useEffect(() => {
    if (location?.state?.category?.value) {
      const value = location?.state?.category?.value;
      const filtered = filter(categoriesList, (category) => category !== value);
      const newCategories = [...filtered, value];
      dispatch(filterCategories(newCategories));
    }
  }, [dispatch, location]);

  return (
    <div
      className={
        width < 720
          ? `w-full h-full ease-in-out duration-200 fixed top-0 ${
              filterVisible ? "left-0" : "left-[-100%]"
            } z-50 bg-white`
          : "min-w-[300px] max-w-[400px] shadow bg-white"
      }
    >
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-amazonbold text-xl tracking-widest text-secondary-medium">
            {Filter}
          </h1>
          {width < 720 && (
            <button onClick={() => setFilterVisible(false)}>
              <img src={closeIcon} alt="close" width={30} />
            </button>
          )}
        </div>
        {width < 720 ? (
          <>
            {filterBody === "category" && (
              <>
                <CheckboxList
                  checkedList={tradetypes}
                  list={tradeTypes}
                  headerText={savdo_turi}
                  headerStyle="ml-3 mt-3"
                  listStyle="pl-3"
                  onChange={changeTradeTypes}
                />
                <SelectCheckbox
                  headerCheckeds={categoriesList}
                  changeHeader={changeCategories}
                  changeBody={changeSubcategories}
                  bodyCheckeds={subcategories}
                  headerText={kategoriyalar}
                  datas={categories}
                  property="subcategories"
                />
              </>
            )}
          </>
        ) : (
          <>
            <CheckboxList
              checkedList={tradetypes}
              list={tradeTypes}
              headerText={savdo_turi}
              headerStyle="ml-3 mt-3"
              listStyle="pl-3"
              onChange={changeTradeTypes}
            />
            <SelectCheckbox
              headerCheckeds={categoriesList}
              changeHeader={changeCategories}
              changeBody={changeSubcategories}
              bodyCheckeds={subcategories}
              headerText={kategoriyalar}
              datas={categories}
              property="subcategories"
            />
          </>
        )}
        {width < 720 ? (
          <>
            {filterBody === "country" && (
              <>
                <SelectCheckbox
                  headerCheckeds={regionsList}
                  bodyCheckeds={districts}
                  changeHeader={changeRegions}
                  changeBody={changeDistricts}
                  headerText={davlatlar}
                  datas={regions}
                  property="districts"
                />
              </>
            )}
          </>
        ) : (
          <>
            <SelectCheckbox
              headerCheckeds={regionsList}
              bodyCheckeds={districts}
              changeHeader={changeRegions}
              changeBody={changeDistricts}
              headerText={davlatlar}
              datas={regions}
              property="districts"
            />
          </>
        )}
        {width < 720 && (
          <button
            onClick={() => setFilterVisible(false)}
            className="bg-alotrade py-2 px-4 block w-full mt-4 text-white rounded"
          >
            Поиск
          </button>
        )}
      </div>
    </div>
  );
};

export default Filter;
