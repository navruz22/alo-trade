import React from "react";
import { map, uniqueId } from "lodash";
import Checkbox from "./Checkbox";
import FilterHeader from "../FilterHeader/FilterHeader";

const CheckboxList = ({ list, headerText }) => {
  return (
    <div className="mt-3 pl-3 pb-2">
      <FilterHeader label={headerText} />
      {map(list, (data) => (
        <Checkbox data={data} key={uniqueId("checkbox")} />
      ))}
    </div>
  );
};

export default CheckboxList;
