import React from "react";
import CheckboxList from "../../Components/CheckboxList/CheckboxList";
import SelectCheckbox from "../../Components/SelectCheckbox/SelectCheckbox";

const Filter = ({ categories, regions, tradeTypes }) => {
  return (
    <div className="w-1/3 min-w-[300px] max-w-[400px] overflow-scroll shadow">
      <div className="p-4">
        <h1 className="font-amazonbold text-xl tracking-widest text-primary-800">
          Filter
        </h1>
        <CheckboxList
          list={tradeTypes}
          headerText="Savdo turi"
          headerStyle="ml-3 mt-3"
          listStyle="pl-3"
        />
        <SelectCheckbox
          headerText={"Kategoriyalar"}
          datas={categories}
          property="subcategories"
        />
        <SelectCheckbox
          headerText={"Viloyatlar"}
          datas={regions}
          property="districts"
        />
      </div>
    </div>
  );
};

export default Filter;
