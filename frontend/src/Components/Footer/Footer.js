import React from "react";
import { BsFacebook, BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full pt-10 pb-[6rem] md:pb-10 bg-alotrade flex justify-between items-center">
      <div className="container">
        <div className="flex items-center flex-col md:flex-row md:justify-between px-[30px]">
          <div className="text-center mb-6 md:mb-0">
            <h2 className="text-[26px] text-white">Связаться с нами:</h2>
            <p className="text-white">+998992234244</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://t.me/alo24">
              <BsTelegram size={21} color="#fff" />
            </a>
            <a>
              <BsInstagram size={21} color="#fff" />
            </a>
            <a>
              <BsFacebook size={21} color="#fff" />
            </a>
            <a>
              <BsYoutube size={21} color="#fff" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
