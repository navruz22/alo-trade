import React from "react";
import { Link } from "react-router-dom";
import UniversalModal from "../Modal/UniversalModal";

const MainPageHeader = () => {
  return (
    <div className="px-4">
      <div className="w-full shadow-md mt-5 rounded bg-white-900 p-3 flex flex-row">
        <Link
          to="/sign-up"
          className="bg-primary-800 w-1/2 block py-2 text-center rounded text-white-900 mr-3"
        >
          Buyurtma berish
        </Link>
        <Link
          to="/companyregister"
          className="bg-primary-800 w-1/2 block py-2 text-center rounded text-white-900"
        >
          Mahsulot yaratish
        </Link>
      </div>

      <UniversalModal
        body="approve"
        isOpen={false}
        headerText="Mahsulot yaratish uchun tashkilot sifatida ro'yxatdan o'tishingiz kerak"
      />
    </div>
  );
};

export default MainPageHeader;
