import React from "react";
import { Link } from "react-router-dom";

const MainPageHeader = () => {
  return (
    <div className="px-4">
      <div className="w-full shadow-md mt-5 rounded bg-white-900 p-3 grid grid-cols-12">
        <div className="col-span-9">
          <h1 className="font-amazonbold text-lg">
            Hurmatli foydalanuvchi siz ro'txatdan o'tmagansiz
          </h1>
          <p className="text-sm text-neutral-600">
            Barcha yangi buyurtmalar, buyurtmachilar bilan bilan bog'lnish,
            buyurtma berish, kompaniyalar bilan bog'lanish va boshqa
            xizmatlardan to'liq foydalanish uchun{" "}
            <Link className="text-amber-600 underline" to="/sign-up">
              ro'yxatdan o'ting
            </Link>{" "}
            yoki{" "}
            <Link className="text-amber-600 underline" to="/sign-in">
              profilingizga kiring
            </Link>
            .
          </p>
        </div>
        <div className="col-span-3 flex items-center">
          <Link
            to="/sign-in"
            className="w-full bg-amber-500 text-white-900 rounded px-4 py-3 text-center font-amazonbold text-base"
          >
            Kirish
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPageHeader;
