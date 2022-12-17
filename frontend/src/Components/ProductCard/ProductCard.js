import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardAdditional from "./CardAdditional";
import CardFooter from "./CardFooter";
import CardEdit from "./CardEdit";
import { useSelector } from "react-redux";
import noImage from "../../assets/images/no-image.svg";
import { useLocation } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";

const ProductCard = ({ product, editHandler, deleteHandler, logged }) => {
  const { userData } = useSelector((state) => state.login);
  const location = useLocation();
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
  const isOrganization = !!userData?.organization?._id;
  const isProfileProducts = location.pathname === "/profile/products";
  return (
    <div className="w-full shadow-2xl mt-5 rounded-xl bg-white-900 bg-white border-[1px] border-[#01c2cc]">
      <div className="text-sm w-full h-full flex flex-col justify-between rounded-xl">
        <p className="pl-2 border-b my-1 flex items-center text-neutral-500 text-sm">
          <IoLocationOutline className="" />
          <span className="text-[10px] md:text-[14px] ml-2">
            {region ? region?.name : "Respublika bo'ylab"}
          </span>
        </p>
        <div className="flex overflow-hidden items-center justify-center bg-white rounded-t-xl">
          <img
            src={images[0] ? images[0] : noImage}
            className="rounded object-contain h-[150px] md:h-[200px]"
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
        {/* {logged && (
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
        )} */}
        {!isCustomer && logged && <CardFooter phone={phone} id={_id} />}
        {isOrganization && logged && isProfileProducts && (
          <CardEdit
            editHandler={editHandler}
            productId={_id}
            deleteHandler={deleteHandler}
            position={position}
          />
        )}
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
