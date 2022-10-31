import React from "react";

const CardHeader = ({ user, createdAt, position, organization, logged }) => {
  const name = organization?.name;
  return (
    <div className="border-b flex justify-between w-full px-3 py-1 text-neutral-500">
      <div className="flex">
        <div className="mr-3">Tashkilot:</div>
        <div className="font-amazonbold">{name}</div>
      </div>
    </div>
  );
};

export default CardHeader;
