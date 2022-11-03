import React from "react";

const CardHeader = ({ user, createdAt, position, organization, logged }) => {
  const name = organization?.name;
  return (
    <div className="border-y w-full px-3 py-1 text-neutral-500 mt-2">
      <div className="flex justify-between w-full">
        <div className="mr-3">Tashkilot:</div>
        <h3 className="font-amazonbold">{name}</h3>
      </div>
    </div>
  );
};

export default CardHeader;
