import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const DetailProductCard = ({ id, user }) => {
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow(!show);
  };
  return (
    <div
      className="
            bg-primary
            rounded
            overflow-hidden
            text-center
            p-4
            lg:px-8
            wow
            fadeInUp
        "
    >
      {/* <h3 class="font-semibold text-white mb-2 text-2xl">
        Join our newsletter!
      </h3> */}
      <div className="flex items-center">
        <div className="flex justify-center p-4 pb-2">
          {user?.image ? (
            <img
              src={user?.image}
              alt={"logo"}
              className="w-[100px] h-[100px] rounded-full bg-neutral-200"
            />
          ) : (
            <h3 className="w-[100px] h-[100px] rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500 text-lg">
              alo
            </h3>
          )}
        </div>
        <div className="font-semibold text-white mb-2 text-2xl">
          {user?.name}
        </div>
      </div>
      <p className="text-right text-base text-white mb-8">
        {user?.region}, {user?.district}
      </p>
      <div className="">
        <button
          onClick={showHandler}
          className=" w-full
            flex
            justify-center
            items-center
            h-[50px]
            text-sm
            font-medium
            bg-white bg-opacity-20
            placeholder-white
            text-white
            rounded
            mb-4
            outline-none
            border border-transparent
            focus-visible:shadow-none
            focus:border-white"
        >
          {show ? (
            "+" + user?.phone
          ) : (
            <IoCallOutline className="text-[14px] md:text-[22px]" />
          )}
        </button>
        <Link
          to="/offers"
          state={{ type: "product", id }}
          class="
          w-full
            flex
            justify-center
            items-center
            text-center
            h-[50px]
            text-sm
            font-medium
            text-white
            rounded
            mb-6
            bg-[#13C296]
            cursor-pointer
            hover:shadow-lg hover:bg-opacity-90
            transition
            duration-300
            ease-in-out
        "
        >
          Заказать
        </Link>
      </div>
    </div>
  );
};

export default DetailProductCard;
