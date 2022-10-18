import React from "react";
import Input from "../Inputs/Input";
import Button from "../Buttons/Button";
import LabelButton from "../Buttons/LabelButton";
import SelectInput from "../SelectInput/SelectInput";

const UserRegister = () => {
  return (
    <div className="bg-white rounded ">
      <form className="px-16 py-5">
        <h1 className="font-bold text-center py-4 text-xl">
          Foydalanuvchi sifatida ro'yxatda o'tish
        </h1>
        <div className="flex flex-row ">
          <Input placeholder="Ism" margin="mr-3" />
          <Input placeholder="Familiya" />
        </div>
        <Input placeholder="Telefon raqam" />
        <div className="flex flex-row w-full">
          <div className="w-full mr-3">
            <SelectInput placeholder="viloyat" options={[]} />
          </div>
          <div className="w-full">
            <SelectInput placeholder="tuman" />
          </div>
        </div>
        <Input placeholder="Parol" type="password" />
        <Input placeholder="Parolni tasdiqlang" type="password" />
        <Button title="Ro'yxatdan o'tish" />
        <br />
        <LabelButton
          link="sign-in"
          label="Avval ro'yxatdan o'tgan bo'lsangiz "
          title={"kirish qismiga qayting"}
        />
      </form>
    </div>
  );
};

export default UserRegister;
