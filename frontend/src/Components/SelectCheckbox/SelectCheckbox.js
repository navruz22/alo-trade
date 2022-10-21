import React, { useState } from "react";
import FilterHeader from "../FilterHeader/FilterHeader";
import { map, uniqueId } from "lodash";
import Checkbox from "../CheckboxList/Checkbox";
import SelectButton from "./SelectButton";

const SelectCheckbox = ({ datas, property, headerText }) => {
  const [currentId, setCurrentId] = useState(null);
  const changeHandler = (e) => {
    const id = e.target.name;
    id === currentId ? setCurrentId(null) : setCurrentId(id);
  };
  return (
    <div className="border-t mt-3 pl-3">
      <FilterHeader label={headerText} />
      <div className="overflow-scroll max-h-[500px]">
        {map(datas, (data, index) => (
          <div key={uniqueId("selectButton")}>
            <SelectButton data={data} onClick={changeHandler} />

            <div
              className={`pl-3 transition-all ease-in-out duration-300 ${
                data.value !== currentId && "hidden"
              }`}
            >
              {map(data[property], (property) => (
                <Checkbox data={property} key={uniqueId("selectCheckbox")} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCheckbox;
