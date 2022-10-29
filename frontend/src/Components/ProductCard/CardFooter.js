import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";

const CardFooter = ({ phone }) => {
  return (
    <div className="w-full border-t grid grid-cols-2 m-0">
      <a
        href={`tel:${phone}`}
        className="w-full flex justify-center border-r py-1 "
      >
        <IoCallOutline size={25} className="text-neutral-500" />
      </a>
      <button className=" w-full flex justify-center py-1">
        <MdOutlineMessage size={25} className="text-neutral-500" />
      </button>
    </div>
  );
};

export default CardFooter;
