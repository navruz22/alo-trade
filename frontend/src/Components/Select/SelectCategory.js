import React from "react";
import SelectInput from "../SelectInput/SelectInput";

const SelectCategory = ({
  categoriesWithSubcategories,
  loading,
  categories,
  selectCategory,
  allSubcategories,
  subcategories,
  selectSubcategory,
  labelCategory,
  labelSubcategory,
}) => {
  return (
    <div className="flex flex-row w-full">
      <div className="w-full mr-3">
        {labelCategory && (
          <p className="text-neutral-500 text-sm mt-[7px]">{labelCategory}</p>
        )}
        <SelectInput
          placeholder="kategoriya"
          options={categoriesWithSubcategories}
          isMulti={true}
          value={categories}
          isDisabled={loading}
          onSelect={selectCategory}
          closeMenuOnSelect={false}
        />
      </div>
      <div className="w-full">
        {labelSubcategory && (
          <p className="text-neutral-500 text-sm mt-[7px]">
            {labelSubcategory}
          </p>
        )}
        <SelectInput
          placeholder="kategoriya turi"
          options={allSubcategories}
          isMulti={true}
          value={subcategories}
          isDisabled={categories.length === 0 || loading}
          onSelect={selectSubcategory}
          closeMenuOnSelect={false}
        />
      </div>
    </div>
  );
};

export default SelectCategory;
