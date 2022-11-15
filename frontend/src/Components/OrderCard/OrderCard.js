import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardAdditional from "./CardAdditional";
import CardFooter from "./CardFooter";
import CardEdit from "./CardEdit";
import { useSelector } from "react-redux";

const OrderCard = ({
  order,
  editHandler,
  deleteHandler,
  logged,
  translations,
}) => {
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
  const phone = organization ? organization.phone : user.phone;
  const isOrganization = userData?.organization;
  return (
    <div className="w-full shadow-md mt-5 rounded bg-white-900 flex">
      <div className="text-sm w-full flex flex-col justify-between ">
        {/* Card header */}
        <CardHeader
          translations={translations}
          logged={logged}
          user={user}
          position={position}
          createdAt={createdAt}
          organization={organization}
        />
        <CardBody
          translations={translations}
          region={region}
          name={name}
          maxPrice={maxPrice}
          minPrice={minPrice}
          description={description}
          currency={currency}
        />
        {logged && (isOrganization || isCustomer) && position === "active" && (
          <CardAdditional
            translations={translations}
            description={description}
            tradetypes={tradetypes}
            categories={categories}
            subcategories={subcategories}
            status={status}
            region={region}
            district={district}
            orderId={_id}
            images={images}
            phone={phone}
            organization={organization}
          />
        )}
        {isCustomer
          ? logged && (
              <CardEdit
                translations={translations}
                editHandler={editHandler}
                orderId={_id}
                deleteHandler={deleteHandler}
                position={position}
              />
            )
          : logged &&
            isOrganization &&
            position === "active" && <CardFooter phone={phone} id={_id} />}
      </div>
    </div>
  );
};

export default OrderCard;
