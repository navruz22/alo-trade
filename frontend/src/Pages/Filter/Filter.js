import React from "react";
import CheckboxList from "../../Components/CheckboxList/CheckboxList";
import SelectCheckbox from "../../Components/SelectCheckbox/SelectCheckbox";

const Filter = ({ categories, regions }) => {
  return (
    <div className="w-1/3 min-w-[300px] max-w-[400px] h-screen overflow-scroll border-r shadow">
      <div className="p-4">
        <h1 className="font-amazonbold text-xl tracking-widest ">Filter</h1>
        <CheckboxList />
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
