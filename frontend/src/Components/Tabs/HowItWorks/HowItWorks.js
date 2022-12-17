import React, { useState } from "react";
import Client from "./Client";
import Seller from "./Seller";

const HowItWorks = () => {
  const [content, setContent] = useState("buy");

  return (
    <div className="">
      <div className="container">
        <div className="py-[30px]">
          <h2 className="md:text-[36px] text-[16px] font-bold">
            Как это работает?
          </h2>
          <div class="flex gap-4 pt-4 justify-center mb-[20px]">
            <button
              className={`block uppercase shadow md:ml-0 border-4 border-[#03c1f6cc] ${
                (content === "buy" && "bg-[#03c1f6cc] text-white") ||
                " bg-white text-[#03c1f6cc]"
              } font-bold focus:shadow-outline focus:outline-none text-white md:text-xs text-[10px] py-3 md:px-10 px-2 rounded`}
              onClick={() => setContent("buy")}
            >
              Покупатель
            </button>
            <button
              className={`block uppercase shadow md:ml-0 border-4 border-[#03c1f6cc] ${
                (content === "sell" && "bg-[#03c1f6cc] text-white") ||
                " bg-white text-[#03c1f6cc]"
              } font-bold focus:shadow-outline focus:outline-none text-white md:text-xs text-[10px] py-3 md:px-10 px-2 rounded`}
              onClick={() => setContent("sell")}
            >
              Продавец
            </button>
          </div>
          {content === "sell" ? <Seller /> : <Client />}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
