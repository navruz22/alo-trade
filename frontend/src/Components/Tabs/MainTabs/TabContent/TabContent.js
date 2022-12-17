import React from "react";
import { Link } from "react-router-dom";

const TabContent = ({ icon, title, link }) => {
  return (
    <Link
      to={link}
      className="relative sm:static flex sm:justify-start  justify-center items-center drop-shadow-xl sm:gap-[20px] sm:py-6 sm:px-8 md:w-[350px] md:h-[150px] w-[100px] h-[100px] bg-[#03c1f6cc] rounded-xl"
    >
      {icon}
      <h2 className="md:text-[25px] text-[14px] font-bold text-white text-center">
        {title}
      </h2>
    </Link>
  );
};

export default TabContent;
