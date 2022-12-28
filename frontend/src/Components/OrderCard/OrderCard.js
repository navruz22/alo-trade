import React from "react";
import CardBody from "./CardBody";
import CardAdditional from "./CardAdditional";
// import CardFooter from "./CardFooter";
// import CardEdit from "./CardEdit";
import { useSelector } from "react-redux";

const OrderCard = ({
  order,
  editHandler,
  deleteHandler,
  logged,
  updatePosition,
  isProfile,
  // translations,
}) => {
  const { userData } = useSelector((state) => state.login);
  const {
    _id,
    // tradetypes,
    region,
    // district,
    // categories,
    // subcategories,
    name,
    description,
    status,
    // currency,
    // minPrice,
    // maxPrice,
    images,
    position,
    user,
    createdAt,
    organization,
  } = order;

  // const isCustomer = userData?.user?._id === user?._id;
  const phone = organization ? organization.phone : user.phone;
  const isOrganization = userData?.organization;
  return (
    <div class="relative pt-10 md:p-4  justify-center w-full rounded-xl group sm:flex space-x-6 bg-white shadow-slate-200 shadow-md border-[1px] hover:rounded-2xl">
      {position === "active" ? (
        <div class="absolute text-[10px] md:text-[16px] top-1 left-1 bg-green-500 shadow-lg text-white cursor-pointer px-3 text-center justify-center items-center py-1 rounded-lg flex space-x-2 flex-row">
          Актуально
        </div>
      ) : (
        <div class="absolute text-[10px] md:text-[16px] top-1 left-1 bg-red-500 shadow-lg text-white cursor-pointer px-3 text-center justify-center items-center py-1 rounded-lg flex space-x-2 flex-row">
          Не актуально
        </div>
      )}
      <img
        class="mx-auto  md:block w-3/12 h-40 rounded-lg hidden"
        alt="art cover"
        loading="lazy"
        src={images[0]}
      />
      <div class="sm:w-8/12">
        <div class="flex flex-col gap-2">
          <CardBody title={name} description={description} />
          <CardAdditional
            id={_id}
            logged={logged}
            isOrganization={isOrganization}
            position={position}
            phone={phone}
            region={region}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
            updatePosition={updatePosition}
            isProfile={isProfile}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
