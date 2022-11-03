import React from "react";

const CompanyRegister = () => {
  return (
    <div className="p-5 text-neutral-600">
      <p className="text-justify py-3">
        Tashkilot yoki korxona egasi bo'lsangiz,{" "}
        <span className="font-amazonbold">"ALOTRADE"</span> platformasida
        foydalanuvchilarga xizmat ko'rsatish, ularga o'z mahsulot va
        xizmatlaringizni taklif etmoqchi bo'lsangiz administrator bilan
        bog'lanishingizni so'raymiz.
      </p>
      <p>
        <span className="font-amazonbold">Telefon:</span>{" "}
        <a href="tel:+998992234244" className="text-primary-800">
          +998 99 223 42 44
        </a>
        ,{" "}
        <a href="tel:+998973666221" className="text-primary-800">
          +998 97 366 62 21
        </a>
      </p>
      <p>
        {" "}
        <span className="font-amazonbold">Tg:</span> t.me/sarvarmurodullayev
      </p>
    </div>
  );
};

export default CompanyRegister;
