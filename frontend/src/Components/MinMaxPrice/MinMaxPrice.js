import React from "react";
import Input from "../Inputs/Input";

const MinMaxPrice = ({ minPrice, maxPrice, onChange, onKeyUp }) => {
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
          label="Narxi"
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
