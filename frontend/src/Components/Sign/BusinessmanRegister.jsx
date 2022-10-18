import React from "react";
import Input from "../Inputs/Input";
import Button from "../Buttons/Button";
import LabelButton from "../Buttons/LabelButton";
import SelectInput from "../SelectInput/SelectInput";

const BusinessmanRegister = () => {
  return (
    <div className="bg-white rounded ">
      <form className="px-16 py-5">
        <h1 className="font-bold text-center py-4 text-xl">
          Tashkilot sifatida ro'yxatda o'tish
        </h1>
        <p className="text-gray-500 text-sm">Shaxsiy ma'lumotlaringiz</p>
        <div className="flex flex-row ">
          <Input placeholder="Ism" margin="mr-3" />
          <Input placeholder="Familiya" />
        </div>
        <Input placeholder="Telefon raqam" />

        <Input placeholder="Parol" type="password" />
        <Input placeholder="Parolni tasdiqlang" type="password" />
        <br />
        <p className="text-gray-500 text-sm">Tashkilot ma'lumotlari</p>
        <Input placeholder="Tashkilot nomi" />
        <Input placeholder="Email" type="mail" />
        <div className="flex flex-row w-full mb-2">
          <div className="w-full mr-3">
            <SelectInput placeholder="viloyat" options={[]} />
          </div>
          <div className="w-full">
            <SelectInput placeholder="tuman" />
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="w-full mr-3">
            <SelectInput placeholder="kategoriya" options={[]} />
          </div>
          <div className="w-full">
            <SelectInput placeholder="kategoriya turi" />
          </div>
        </div>
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

export default BusinessmanRegister;
