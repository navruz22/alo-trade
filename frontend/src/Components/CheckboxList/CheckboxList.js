import React from "react";
import { map, uniqueId } from "lodash";
import Checkbox from "./Checkbox";
import FilterHeader from "../FilterHeader/FilterHeader";

const CheckboxList = () => {
  const list = [
    {
      value: "1",
      label: "Option 1",
    },
    { value: "2", label: "Option 2", checked: true },
  ];
  return (
    <div className="mt-3 pl-3 border-t">
      <FilterHeader label="Savdo turi" />
      {map(list, (data) => (
        <Checkbox data={data} key={uniqueId("checkbox")} />
      ))}
    </div>
  );
};

export default CheckboxList;
