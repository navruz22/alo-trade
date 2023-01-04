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
  labelSubcategory2,
  allSubcategories2,
  selectSubcategory2,
  openSubcategories,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 items-end ">
      <div className="w-full">
        {labelCategory && (
          <p className="text-neutral-500 text-sm mt-[7px]">{labelCategory}</p>
        )}
        <SelectInput
          placeholder={kategoriya}
          options={categoriesWithSubcategories}
          isMulti={false}
          value={categories}
          isDisabled={loading}
          onSelect={selectCategory}
          closeMenuOnSelect={true}
        />
      </div>
      <div className="w-full">
        <button
          onClick={openSubcategories}
          className="block w-full md:w-auto py-2 px-4 text-white bg-alotrade rounded"
        >
          Подкатегории
        </button>
      </div>
    </div>
  );
};

export default SelectCategory;
