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
  kategoriya,
  kategoriya_turi,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
      <div className="w-full md:mr-3">
        {labelCategory && (
          <p className="text-neutral-500 text-sm mt-[7px]">{labelCategory}</p>
        )}
        <SelectInput
          placeholder={kategoriya}
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
          placeholder={kategoriya_turi}
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
