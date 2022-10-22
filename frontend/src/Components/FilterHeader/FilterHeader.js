import React from "react";

const FilterHeader = ({ label }) => {
  return (
    <h3 className="font-amazonbold tracking-normal text-md text-neutral-700">
      {label}
    </h3>
  );
};

export default FilterHeader;
