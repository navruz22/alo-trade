import React from "react";
import { Link } from "react-router-dom";

const WarningSignIn = () => {
  return (
    <div className="max-w-[700px] bg-white py-2 md:py-10 px-4 rounded">
      <h2 className="text-[16px] md:text-[24px] font-bold text-center mb-6 ">
        Вы еще не зарегистрировались!
      </h2>
      <div className="flex items-strech md:items-center flex-col md:flex-row gap-4 md:gap-0 ">
        <h2 className="text-[14px] md:text-[16px] font-medium md:mr-4">
          Зарегистрироваться как:
        </h2>
        <Link
          to="/sign-up/business"
          className="p-2 bg-alotrade text-white text-center rounded md:mr-2"
        >
          Компания
        </Link>
        <Link
          to="/sign-up"
          className="p-2 bg-alotrade text-center text-white rounded"
        >
          Пользователь
        </Link>
      </div>
    </div>
  );
};

export default WarningSignIn;
