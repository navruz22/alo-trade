import React from "react";

const CardHeader = ({
  user,
  createdAt,
  position,
  organization,
  logged,
  translations,
}) => {
  const name = organization
    ? organization?.name
    : user?.firstname + " " + user?.lastname;
  return (
    <div className="border-b flex justify-between w-full px-3 py-1 text-neutral-500">
      {logged && (
        <div className="flex">
          <div className="mr-3">{translations.buyurtmachi}:</div>
          <div className="font-amazonbold">{name}</div>
        </div>
      )}
      <div className="flex">
        <div className="mr-3">{translations.sana}: </div>
        <div className="font-amazonbold">
          {new Date(createdAt).toLocaleDateString()}
        </div>
      </div>
      <div className="flex">
        <div className="mr-3">{translations.buyurtma_holati}: </div>
        <div
          className={`font-amazonbold ${
            position === "active" ? "bg-green-500" : "bg-red-600"
          } px-2 rounded-md text-white-900 text-xs flex items-center`}
        >
          {translations[position]}
        </div>
      </div>
    </div>
  );
};

export default CardHeader;
