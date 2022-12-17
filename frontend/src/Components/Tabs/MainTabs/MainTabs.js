import React, { useState } from "react";
import AddIcon from "./icons/AddIcon";
import OrderIcon from "./icons/OrderIcon";
import PriceIcon from "./icons/PriceIcon";
import ProductIcon from "./icons/ProductIcon";
import SellerIcon from "./icons/SellerIcon";
import TabContent from "./TabContent/TabContent";

const MainTabs = ({ handleCreateOrder }) => {
  const iconClass =
    "sm:static absolute sm:top-0 sm:left-0 sm:translate-x-0 top-1 left-[50%] translate-x-[-50%] md:w-[100px] w-[20px]";
  const sell = [
    {
      icon: <OrderIcon className={iconClass} />,
      title: "Все заявки",
      link: "/orders",
    },
    {
      icon: <AddIcon className={iconClass} />,
      title: "Добавить компанию",
    },
    {
      title: "Тарифы",
      icon: <PriceIcon className={iconClass} />,
    },
  ];

  const buy = [
    {
      icon: <ProductIcon className={iconClass} />,
      title: "Товары",
      link: "/products",
    },
    {
      title: "Поставщики",
      icon: <SellerIcon className={iconClass} />,
      link: "/organizations",
    },
  ];

  const [content, setContent] = useState("buy");
  return (
    <div className="bg-white">
      <div className="container">
        <div className="py-4">
          <div class="flex gap-4 justify-center mb-[20px]">
            <button
              className={`block uppercase shadow md:ml-0 border-4 border-[#03c1f6cc] ${
                (content === "buy" && "bg-[#03c1f6cc] text-white") ||
                " bg-white text-[#03c1f6cc]"
              } font-bold focus:shadow-outline focus:outline-none text-white md:text-xs text-[10px] py-3 md:px-10 px-2 rounded`}
              onClick={() => setContent("buy")}
            >
              Покупать
            </button>
            <button
              className={`block uppercase shadow md:ml-0 border-4 border-[#03c1f6cc] ${
                (content === "sell" && "bg-[#03c1f6cc] text-white") ||
                " bg-white text-[#03c1f6cc]"
              } font-bold focus:shadow-outline focus:outline-none text-white md:text-xs text-[10px] py-3 md:px-10 px-2 rounded`}
              onClick={() => setContent("sell")}
            >
              Продавать
            </button>
          </div>
          {content === "buy" ? (
            <div className="flex md:justify-evenly justify-between items-center w-full">
              <button
                onClick={handleCreateOrder}
                className="relative sm:static flex sm:justify-start  justify-center items-center drop-shadow-xl sm:gap-[20px] sm:py-6 sm:px-8 md:w-[350px] md:h-[150px] w-[100px] h-[100px] bg-[#03c1f6cc] rounded-xl"
              >
                <OrderIcon className={iconClass} />
                <h2 className="md:text-[25px] text-[14px] font-bold text-white text-center">
                  Создать заявку
                </h2>
              </button>
              {buy.map((el, ind) => (
                <TabContent
                  icon={el?.icon}
                  link={el?.link}
                  title={el?.title}
                  key={ind}
                />
              ))}
            </div>
          ) : (
            <div className="flex md:justify-evenly justify-between items-center w-full">
              {sell.map((el, ind) => (
                <TabContent icon={el?.icon} title={el?.title} key={ind} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainTabs;
