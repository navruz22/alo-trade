import React from "react";
import { Link } from "react-router-dom";
import Input from "../../Components/Inputs/Input";
import Button from "../../Components/Buttons/Button";
import LabelButton from "../../Components/Buttons/LabelButton";
import image from "./../../images/login.png";

const SignIn = () => {
  return (
    <div className="w-full h-screen bg-[#EFF2F5] flex flex-col ">
      <div className="container m-auto">
        <div className="container m-auto flex lg:flex-row">
          <div className="lg:w-1/2  hidden lg:block">
            <div className="flex justify-center">
              <img src={image} alt="login" width="70%" />
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <form className="flex flex-col items-center justify-center h-full bg-white px-10 py-5 rounded mx-20 shadow shadow-xl">
              <Input
                placeholder="+998 97 366 62 21"
                type="text"
                label="Telefon raqam"
              />
              <Input placeholder="* * * * * *" type="password" label="Parol" />
              <Button title="Kirish" />
              <LabelButton
                label="Tizimda yangimisiz? Unda avval "
                title=" ro'yxatdan o'ting"
                link="/sign-up"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="bottom-0 bg-white w-full">
        <div className="container m-auto text-center">
          By{" "}
          <Link
            to="/"
            className="py-4 inline-block text-blue-500 cursor-pointer underline"
          >
            Alo24
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
