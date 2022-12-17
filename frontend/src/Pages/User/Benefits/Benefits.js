import React from "react";
import OrderIcon from "../../../Components/Tabs/MainTabs/icons/OrderIcon";

const Benefits = () => {
  return (
    <div className="pt-6">
      <h2 className="md:text-[36px] text-[16px] font-bold">
        Как помогаем бизнесу?
      </h2>
      <div className="p-6 flex items-center md:flex-row flex-col gap-[1%]">
        <div className="flex items-center gap-[15px] md:flex-[0_0_33%] md:flex-row flex-col p-[15px] md:mb-0 mb-[15px] bg-white rounded-xl">
          <div>
            <OrderIcon className={"md:w-[50px] w-[30px] fill-black"} />
          </div>
          <div>
            <h2 className="md:text-[16px] text-[12px] font-medium text-black text-center">
              Уникалная торговая плошадка для оптовых покупателей и постовшиков
              B2B сегмента. Тут вы можите покупат и продат любого товара оптом
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-[15px] md:flex-[0_0_33%] md:flex-row flex-col p-[15px] md:mb-0 mb-[15px] bg-white rounded-xl">
          <div>
            <OrderIcon className={"md:w-[50px] w-[30px] fill-black"} />
          </div>
          <div>
            <h2 className="md:text-[16px] text-[12px] font-medium text-black text-center">
              Уникалная торговая плошадка для оптовых покупателей и постовшиков
              B2B сегмента. Тут вы можите покупат и продат любого товара оптом
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-[15px] md:flex-[0_0_33%] md:flex-row flex-col p-[15px] md:mb-0 mb-[15px] bg-white rounded-xl">
          <div>
            <OrderIcon className={"md:w-[50px] w-[30px] fill-black"} />
          </div>
          <div>
            <h2 className="md:text-[16px] text-[12px] font-medium text-black text-center">
              Уникалная торговая плошадка для оптовых покупателей и постовшиков
              B2B сегмента. Тут вы можите покупат и продат любого товара оптом
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
