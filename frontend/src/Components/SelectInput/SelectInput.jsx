import React from "react";
import Select from "react-select";
import CustomStyle, { DropdownIcon } from "./CustomStyle";

const SelectInput = ({
  onSelect,
  options,
  isDisabled,
  label,
  placeholder,
  value,
  name,
  isMulti = false,
  closeMenuOnSelect = true,
}) => {
  return (
    <div className="grow">
      {label && (
        <label
          className={"text-blue-700 block leading-[1.125rem] mb-[.625rem]"}
        >
          {label}
        </label>
      )}
      <Select
        name={name}
        onChange={onSelect}
        styles={CustomStyle}
        value={value}
        options={options}
        isDisabled={isDisabled}
        placeholder={placeholder}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: DropdownIcon,
        }}
        isMulti={isMulti}
        closeMenuOnSelect={closeMenuOnSelect}
      />
    </div>
  );
};

export default SelectInput;
