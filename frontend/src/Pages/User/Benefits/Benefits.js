import React from "react";
import OrderIcon from "../../../Components/Tabs/MainTabs/icons/OrderIcon";

const Benefits = () => {
  return (
    <div className="pt-6">
      <h2 className="md:text-[36px] text-[16px] font-bold">
        Как помогаем бизнесу?
      </h2>
      <div className="pt-6 px-2 md:p-6 flex items-center md:flex-row flex-col gap-4 md:gap-[1%]">
        <div className="flex items-center gap-[15px] md:flex-[0_0_33%] border-[1px] border-alotrade p-2 md:flex-row flex-col md:p-[15px] md:mb-0 mb-[15px] bg-white rounded-xl">
          {/* <div>
            <OrderIcon className={"md:w-[50px] w-[30px] fill-black"} />
          </div> */}
          <div>
            <h2 className="md:text-[16px] text-[12px] font-medium text-black text-center">
              Уникалная торговая плошадка для оптовых покупателей и постовшиков
              B2B сегмента. Тут вы можите покупат и продат любого товара оптом
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-[15px] md:flex-[0_0_33%] border-[1px] border-alotrade p-2 md:flex-row flex-col md:p-[15px] md:mb-0 mb-[15px] bg-white rounded-xl">
          {/* <div>
            <OrderIcon className={"md:w-[50px] w-[30px] fill-black"} />
          </div> */}
          <div>
            <h2 className="md:text-[16px] text-[12px] font-medium text-black text-center">
              С помощью Alotrade.uz вы можете легко заказать любой товар
              напрямую у производителей и создать свой бизнес, продавая его в
              розницу на маркетплейсах.
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-[15px] md:flex-[0_0_33%] border-[1px] border-alotrade p-2 md:flex-row flex-col md:p-[15px] md:mb-0 mb-[15px] bg-white rounded-xl">
          {/* <div>
            <OrderIcon className={"md:w-[50px] w-[30px] fill-black"} />
          </div> */}
          <div>
            <h2 className="md:text-[16px] text-[12px] font-medium text-black text-center">
              С помощью Alotrade.uz вы можете легко заказать любой товар
              напрямую у производителей и создать свой бизнес, продавая его в
              розницу на маркетплейсах.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
