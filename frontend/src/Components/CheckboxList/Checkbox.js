import React from "react";
import { uniqueId } from "lodash";
import { useTranslation } from "react-i18next";

const Checkbox = ({ data, onChange, checked, className }) => {
  const { t } = useTranslation(["common"]);
  const id = uniqueId();
  return (
    <>
      <label
        htmlFor={id}
        className={`${className} flex items-center text-neutral-600 text-sm cursor-pointer ml-2 w-full `}
      >
        <input
          checked={checked}
          onChange={onChange}
          value={data.value}
          id={id}
          type="checkbox"
          className="w-[1rem] h-[1rem] mr-2"
        />
        <span className="w-full">{t(data.label)}</span>
      </label>
    </>
  );
};

export default Checkbox;
