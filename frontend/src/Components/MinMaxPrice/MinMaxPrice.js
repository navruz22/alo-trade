import React from "react";
import Input from "../Inputs/Input";
import { useTranslation } from "react-i18next";
import { getTranslations } from "../../translation";

const MinMaxPrice = ({ minPrice, maxPrice, onChange, onKeyUp }) => {
  const { t } = useTranslation(["common"]);
  const { narxi } = getTranslations(t);
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <Input
          name="minPrice"
          type="number"
          onChange={onChange}
          onKeyUp={onKeyUp}
          value={minPrice}
          placeholder="min"
          label={narxi}
          labelStyle="text-sm font-normal"
        />
        <Input
          name="maxPrice"
          type="number"
          onKeyUp={onKeyUp}
          placeholder="max"
          label={" "}
          labelStyle={`pt-5`}
          value={maxPrice}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default MinMaxPrice;
