import React, { useState } from "react";
import FilterHeader from "../FilterHeader/FilterHeader";
import { map, uniqueId } from "lodash";
import Checkbox from "../CheckboxList/Checkbox";
import SelectButton from "./SelectButton";
import SelectInput from "../SelectInput/SelectInput";
import { useLocation } from "react-router-dom";

const SelectCheckbox = ({
  datas,
  property,
  headerText,
  changeHeader,
  headerCheckeds,
  changeBody,
  bodyCheckeds,
  isCategory,
  categories,
  changeCategory,
}) => {
  const location = useLocation();
  const [currentId, setCurrentId] = useState(null);
  const changeHandler = (e) => {
    const id = e.target.name;
    id === currentId ? setCurrentId(null) : setCurrentId(id);
  };

  const pageIncludeFalse =
    !location.pathname.includes("/create_product") &&
    !location.pathname.includes("/create_order") &&
    !location.pathname.includes("/sign-up/business") &&
    !location.pathname.includes("/profile/organization");
  const pageIncludeTrue =
    location.pathname.includes("/create_product") ||
    location.pathname.includes("/create_order");

  return (
    <div className="mt-3">
      <div className="pb-4 px-4">
        {!isCategory && <FilterHeader className={"mb-4"} label={headerText} />}
        {isCategory && pageIncludeFalse && (
          <SelectInput
            options={categories}
            placeholder={"Kategoriya tanlang..."}
            onSelect={changeCategory}
          />
        )}
      </div>
      <div className="h-full w-full md:max-h-[500px]">
        {map(datas, (data, index) => (
          <div key={uniqueId("selectButton")}>
            <SelectButton
              headerCheckeds={headerCheckeds}
              data={data}
              onClick={changeHandler}
              currentId={currentId}
              changeHeader={changeHeader}
              checkBoxClass="font-semibold"
            />
            <div
              className={`pl-3 transition-all ease-in-out duration-300 ${
                data.value !== currentId && "hidden"
              }`}
            >
              {map(data[property], (property) => (
                <Checkbox
                  onChange={changeBody}
                  checked={bodyCheckeds?.some(
                    (checked) => checked === property.value
                  )}
                  data={property}
                  key={uniqueId("selectCheckbox")}
                  className="mt-2"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectCheckbox;
