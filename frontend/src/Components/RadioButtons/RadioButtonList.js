import React from "react";
import { uniqueId, map } from "lodash";
import RadioButton from "./RadioButton";
import InputHeaderText from "../InputHeaderText/InputHeaderText";

const RadioButtonList = ({ list, label, onChange, name }) => {
  return (
    <div>
      {label && <InputHeaderText title={label} />}
      {map(list, (item) => (
        <RadioButton
          name={name}
          key={uniqueId()}
          label={item.label}
          value={item.value}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default RadioButtonList;
