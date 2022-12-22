import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import CardAdditional from "./CardAdditional";
// import CardFooter from "./CardFooter";
// import CardEdit from "./CardEdit";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OrderCardMain = ({
  order,
  // editHandler,
  // deleteHandler,
  logged,
  // translations,
}) => {
  const { userData } = useSelector((state) => state.login);
  const {
    // _id,
    // tradetypes,
    region,
    // district,
    // categories,
    // subcategories,
    name,
    description,
    // status,
    // currency,
    // minPrice,
    // maxPrice,
    images,
    position,
    user,
    createdAt,
    organization,
    isImg,
  } = order;
  // const isCustomer = userData?.user?._id === user?._id;
  const phone = organization ? organization.phone : user.phone;
  const isOrganization = userData?.organization;
  return (
    <Link
      to={logged ? `/orders/${order._id}` : "/"}
      className="relative md:p-4 flex flex-col gap-4 max-w-[680px] h-[180px] rounded-xl group  space-x-6 bg-white shadow-xl hover:rounded-2xl"
    >
      <div class="absolute text-[10px] md:text-[16px] top-1 right-1 bg-green-500 shadow-lg text-white cursor-pointer px-3 text-center justify-center items-center py-1 rounded-lg flex space-x-2 flex-row">
        Актуально
      </div>
      {isImg && (
        <img
          class="mx-auto w-full md:block w-4/12 h-40 rounded-lg hidden"
          alt="art cover"
          loading="lazy"
          src={images}
        />
      )}
      {/* sm:w-8/12 */}
      <CardHeader
        createdAt={createdAt}
        organization={organization}
        user={user}
      />
      <CardBody title={name} description={description} />
    </Link>
  );
};

export default OrderCardMain;
