import React, { useState } from "react";
import { IoCallOutline } from "react-icons/io5";
import { map } from "lodash";
import { Link } from "react-router-dom";

const CardInfo = ({ categories, subcategories, tradetypes, phone }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="mt-4 text-neutral-500">
      <div className="border-l pl-3 mb-2 grid grid-cols-4 border-neutral-400 mx-4">
        <h3 className="text-sm font-amazonbold"> Savdo faoliyati</h3>
        <h4 className=" text-sm col-span-3">
          {`${map(tradetypes, (tradetype) => tradetype.name).join(", ")}`}
        </h4>
      </div>
      <div className="border-l pl-3 border-neutral-400 mb-2 grid grid-cols-4 mx-4">
        <h3 className="text-sm font-amazonbold">Yo'nalishi</h3>
        <h4 className=" text-sm col-span-3">
          {`${map(categories, (category) => category.name).join(", ")}, ${map(
            subcategories,
            (subcategory) => subcategory.name
          ).join(", ")}`}
        </h4>
      </div>
      <div className="pl-3 flex w-full border-t mt-3 text-sm">
        <p
          onClick={handleShow}
          className="w-1/2 border-r flex items-center justify-center py-1 hover:text-success-500"
        >
          {show ? phone : <IoCallOutline size={20} />}
        </p>
        <Link className="w-1/2 flex items-center justify-center py-1 hover:text-success-500 text-green-600">
          Mahsulotlar
        </Link>
      </div>
    </div>
  );
};

export default CardInfo;
