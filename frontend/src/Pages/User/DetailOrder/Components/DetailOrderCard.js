import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import UniversalModal from "../../../../Components/Modal/UniversalModal";
import useWindowSize from "../../../../hooks/useWindowSize";

const DetailOrderCard = ({ id, user }) => {
  const { width } = useWindowSize();

  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow(!show);
  };
  return (
    <>
      <div
        className="
            bg-alotrade
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
            {user?.firstname} {user?.lastname}
          </div>
        </div>
        <p className="text-right text-base text-white mb-8">
          {user?.region}, {user?.district}
        </p>
        <div>
          <button
            onClick={showHandler}
            className=" w-full
            flex
            justify-center
            items-center
            h-[50px]
            text-sm
            font-medium
            bg-green-500
            placeholder-white
            text-white
            rounded
            mb-4
            outline-none
            border border-transparent
            focus-visible:shadow-none
            focus:border-white"
          >
            {width > 720 ? (
              (show && "+" + user?.phone) || (
                <IoCallOutline className="text-[14px] md:text-[22px]" />
              )
            ) : (
              <IoCallOutline
                onClick={() => setShow(true)}
                className="text-[14px] md:text-[22px]"
              />
            )}
          </button>
          <Link
            to="/offers"
            state={{ type: "order", id }}
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
            bg-orange-500
            cursor-pointer
            hover:shadow-lg hover:bg-opacity-90
            transition
            duration-300
            ease-in-out
        "
          >
            Отпрaвить предложение
          </Link>
        </div>
      </div>
      <UniversalModal
        isOpen={width < 720 && show}
        body={"phone"}
        phone={user?.phone.includes("+") ? user?.phone : "+" + user?.phone}
        closeModal={() => setShow(false)}
      />
    </>
  );
};

export default DetailOrderCard;
