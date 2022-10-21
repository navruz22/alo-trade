import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../../Components/Inputs/Input";
import Button from "../../../Components/Buttons/Button";
import LabelButton from "../../../Components/Buttons/LabelButton";
import image from "../../../assets/images/login.png";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../signSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.login);

  const [password, setPassword] = useState("123456");
  const [phone, setPhone] = useState("998973666221");

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value.trim();
    name === "password" && setPassword(value);
    name === "phone" && setPhone(value);
  };

  const enterHandler = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
      submitHandler();
    }
  };

  const submitHandler = () => {
    const data = {
      password,
      phone: "+" + phone,
    };
    dispatch(signIn({ ...data }));
  };

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
            <div className="flex flex-col items-center justify-center h-full bg-white-900 px-10 py-5 rounded mx-20 shadow shadow-xl">
              <Input
                isDisabled={loading}
                placeholder="+998 97 366 62 21"
                type="text"
                label="Telefon raqam"
                value={phone}
                onChange={changeHandler}
                name="phone"
                onKeyUp={enterHandler}
              />
              <Input
                isDisabled={loading}
                placeholder="* * * * * *"
                type="password"
                label="Parol"
                onKeyUp={enterHandler}
                name="password"
                value={password}
                onChange={changeHandler}
              />
              <Button
                title="Kirish"
                onClick={submitHandler}
                isDisabled={loading}
              />
              <LabelButton
                label="Tizimda yangimisiz? Unda avval "
                title=" ro'yxatdan o'ting"
                link="/sign-up"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-0 bg-white-900 w-full">
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
