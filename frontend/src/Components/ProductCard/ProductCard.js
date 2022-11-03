import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardAdditional from "./CardAdditional";
import CardFooter from "./CardFooter";
import CardEdit from "./CardEdit";
import { useSelector } from "react-redux";
import noImage from "../../assets/images/no-image.svg";

const ProductCard = ({ product, editHandler, deleteHandler, logged }) => {
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
  } = product;
  const isCustomer = userData?.user?._id === user?._id;
  const phone = organization?.phone;
  // const isOrganization = userData?.organization;
  return (
    <div className="w-full shadow-md mt-5 rounded-md bg-white-900 ">
      <div className="text-sm w-full h-full flex flex-col justify-between ">
        <div className="flex overflow-hidden items-center justify-center">
          <img
            src={images[0] ? images[0] : noImage}
            className="rounded h-[200px]"
            alt="Product"
          />
        </div>
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
        {logged && (
          <CardAdditional
            description={description}
            tradetypes={tradetypes}
            categories={categories}
            subcategories={subcategories}
            status={status}
            region={region}
            district={district}
            productId={_id}
            images={images}
            phone={phone}
            organization={organization}
          />
        )}
        {isCustomer
          ? logged && (
              <CardEdit
                editHandler={editHandler}
                productId={_id}
                deleteHandler={deleteHandler}
                position={position}
              />
            )
          : logged && <CardFooter phone={phone} id={_id} />}
      </div>
      {/*<div className="max-w-sm flex items-center justify-center overflow-hidden h-auto">*/}
      {/*  {images[0] && (*/}
      {/*    <img src={images[0]} className="w-[200px]" alt="alotrade.uz" />*/}
      {/*  )}*/}
      {/*</div>*/}
    </div>
  );
};

export default ProductCard;
