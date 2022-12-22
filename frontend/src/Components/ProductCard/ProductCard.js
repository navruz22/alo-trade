import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardEdit from "./CardEdit";
import { useSelector } from "react-redux";
import noImage from "../../assets/images/no-image.svg";
import { Link, useLocation } from "react-router-dom";
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

  if (isOrganization && logged && isProfileProducts) {
    return (
      <div
        className={`w-full shadow-2xl mt-5 rounded-xl bg-white-900 bg-white border-[1px] border-[#01c2cc]`}
      >
        <div className="text-sm w-full h-full flex flex-col justify-between rounded-xl">
          <Link
            to={`/products/${_id}`}
            className="text-sm w-full h-full flex flex-col justify-between rounded-xl"
          >
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
          </Link>
          <CardEdit
            editHandler={editHandler}
            productId={_id}
            deleteHandler={deleteHandler}
            position={position}
          />
        </div>
      </div>
    );
  }
  return (
    <Link
      to={`/products/${_id}`}
      className={`w-full shadow-2xl rounded-xl block h-full bg-white border-[1px] border-[#01c2cc]`}
    >
      <div className="text-sm w-full h-full flex flex-col justify-between rounded-xl">
        <p className="pl-2 border-b my-1 flex items-center text-neutral-500 text-sm">
          <IoLocationOutline className="" />
          <span className="text-[10px] md:text-[14px] ml-2">
            {region ? region?.name : "Respublika bo'ylab"}
          </span>
        </p>
        <div className="flex h-[200px] items-center justify-center bg-white rounded-t-xl">
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
      </div>
    </Link>
  );
};

export default ProductCard;
