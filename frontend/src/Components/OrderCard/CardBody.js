import React from "react";

const CardBody = ({ title, description }) => {
  function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
  }
  return (
    <div class="px-4">
      <h4 class="text-md font-semibold text-cyan-900">{title}</h4>
      <p className="text-[12px] text-justify">{truncate(description, 30)}</p>
    </div>
  );
};

export default CardBody;
