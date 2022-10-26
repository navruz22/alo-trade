import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardAdditional from "./CardAdditional";
import CardFooter from "./CardFooter";
import CardEdit from "./CardEdit";
import { useSelector } from "react-redux";

const OrderCard = ({ order, editHandler, deleteHandler }) => {
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
    organization,
    createdAt,
  } = order;

  const isCustomer = userData.user._id === user._id;

  return (
    <div className="w-full shadow-md mt-5 rounded bg-white-900 flex">
      <div className="text-sm w-full flex flex-col justify-between ">
        {/* Card header */}
        <CardHeader
          user={user}
          position={position}
          createdAt={createdAt}
          organization={organization}
        />
        <CardBody
          name={name}
          maxPrice={maxPrice}
          minPrice={minPrice}
          description={description}
          currency={currency}
        />
        <CardAdditional
          tradetypes={tradetypes}
          categories={categories}
          subcategories={subcategories}
          status={status}
          region={region}
          district={district}
          orderId={_id}
        />
        {isCustomer ? (
          <CardEdit
            editHandler={editHandler}
            orderId={_id}
            deleteHandler={deleteHandler}
          />
        ) : (
          <CardFooter />
        )}
      </div>
      <div className="max-w-sm flex items-center justify-center overflow-hidden h-auto">
        {images[0] && (
          <img src={images[0]} className="w-[200px]" alt="alotrade.uz" />
        )}
      </div>
    </div>
  );
};

export default OrderCard;
