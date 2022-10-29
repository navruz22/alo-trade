import React from "react";
import { IoTrashOutline } from "react-icons/io5";
import { BsPencilSquare } from "react-icons/bs";

const CardEdit = ({ editHandler, productId, deleteHandler }) => {
  return (
    <div className="w-full border-t product-t flex m-0">
      <button
        onClick={() => editHandler(productId)}
        className="w-full flex justify-center border-r product-r py-1 "
      >
        <BsPencilSquare size={22} className="text-neutral-500" />
      </button>
      <button
        className=" w-full flex justify-center py-1"
        onClick={() => deleteHandler(productId)}
      >
        <IoTrashOutline size={25} className="text-neutral-500" />
      </button>
    </div>
  );
};

export default CardEdit;
