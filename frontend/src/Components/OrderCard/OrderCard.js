import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardAdditional from "./CardAdditional";
import CardFooter from "./CardFooter";
import CardEdit from "./CardEdit";
import { useSelector } from "react-redux";

const OrderCard = ({ order, editHandler, deleteHandler, logged }) => {
  const { userData } = useSelector((state) => state.login);
  const {
    _id,
    tradetypes,
    region,
    district,
    categories,
    subcategories,
    name,
    description,
    status,
    currency,
    minPrice,
    maxPrice,
    images,
    position,
    user,
    createdAt,
    organization,
  } = order;
  const isCustomer = userData?.user?._id === user?._id;
  const phone = userData?.user?.phone;
  const isOrganization = userData?.organization;

  return (
    <div className="w-full shadow-md mt-5 rounded bg-white-900 flex">
      <div className="text-sm w-full flex flex-col justify-between ">
        {/* Card header */}
        <CardHeader
          logged={logged}
          user={user}
          position={position}
          createdAt={createdAt}
          organization={organization}
        />
        <CardBody
          region={region}
          name={name}
          maxPrice={maxPrice}
          minPrice={minPrice}
          description={description}
          currency={currency}
        />
        {logged && isOrganization && (
          <CardAdditional
            tradetypes={tradetypes}
            categories={categories}
            subcategories={subcategories}
            status={status}
            region={region}
            district={district}
            orderId={_id}
            images={images}
            phone={phone}
          />
        )}
        {isCustomer
          ? logged && (
              <CardEdit
                editHandler={editHandler}
                orderId={_id}
                deleteHandler={deleteHandler}
                position={position}
              />
            )
          : logged && isOrganization && <CardFooter />}
      </div>
      {/*<div className="max-w-sm flex items-center justify-center overflow-hidden h-auto">*/}
      {/*  {images[0] && (*/}
      {/*    <img src={images[0]} className="w-[200px]" alt="alotrade.uz" />*/}
      {/*  )}*/}
      {/*</div>*/}
    </div>
  );
};

export default OrderCard;
