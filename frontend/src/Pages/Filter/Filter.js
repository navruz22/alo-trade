import React from "react";
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

const Filter = ({ categories, regions, tradeTypes }) => {
  const dispatch = useDispatch();
  const {
    tradetypes,
    categories: categoriesList,
    subcategories,
    districts,
    regions: regionsList,
  } = useSelector((state) => state.filter);

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

  return (
    <div className="w-1/3 min-w-[300px] max-w-[400px] overflow-scroll shadow">
      <div className="p-4">
        <h1 className="font-amazonbold text-xl tracking-widest text-primary-800">
          Filter
        </h1>
        <CheckboxList
          checkedList={tradetypes}
          list={tradeTypes}
          headerText="Savdo turi"
          headerStyle="ml-3 mt-3"
          listStyle="pl-3"
          onChange={changeTradeTypes}
        />
        <SelectCheckbox
          headerCheckeds={categoriesList}
          changeHeader={changeCategories}
          changeBody={changeSubcategories}
          bodyCheckeds={subcategories}
          headerText={"Kategoriyalar"}
          datas={categories}
          property="subcategories"
        />
        <SelectCheckbox
          headerCheckeds={regionsList}
          bodyCheckeds={districts}
          changeHeader={changeRegions}
          changeBody={changeDistricts}
          headerText={"Viloyatlar"}
          datas={regions}
          property="districts"
        />
      </div>
    </div>
  );
};

export default Filter;
