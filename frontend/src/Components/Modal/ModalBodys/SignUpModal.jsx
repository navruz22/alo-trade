import React from "react";
import Input from "../../Inputs/Input";
import Button from "../../Buttons/Button";
import SelectInput from "../../SelectInput/SelectInput";
import { range, map } from "lodash";

const SignUpModal = ({}) => {
  const regions = [
    { label: "Andijon", value: "Andijon" },
    { label: "Buxoro", value: "Buxoro" },
    { label: "Farg'ona", value: "Farg'ona" },
    { label: "Jizzax", value: "Jizzax" },
    { label: "Namangan", value: "Namangan" },
    { label: "Navoiy", value: "Navoiy" },
    { label: "Qashqadaryo", value: "Qashqadaryo" },
    {
      label: "Qoraqalpog'iston Respublikasi",
      value: "Qoraqalpog'iston Respublikasi",
    },
    { label: "Samarqand", value: "Samarqand" },
    { label: "Sirdaryo", value: "Sirdaryo" },
    { label: "Surxondaryo", value: "Surxondaryo" },
    { label: "Toshkent", value: "Toshkent" },
    { label: "Toshkent shahri", value: "Toshkent shahri" },
    { label: "Xorazm", value: "Xorazm" },
  ];

  const districts = [
    { label: "Xatirchi", value: "Xatirchi", region: "Navoiy" },
    { label: "Zangiota", value: "Zangiota", region: "Toshkent" },
    { label: "Ishtixon", value: "Ishtixon", region: "Samarqand" },
  ];
  return (
    <div className="overflow-scroll">
      <h3 className="font-semibold text-xl p-0 pl-4">Ro'yxatdan o'tish</h3>
      <hr />
      <form className="flex flex-col items-center justify-center h-full bg-white px-3 py-2 rounded">
        <div className="flex w-full">
          <Input placeholder="Ismingiz" margin={"mr-3"} />
          <Input placeholder="Familiyangiz" />
        </div>
        <Input placeholder="Telefon raqam yoki email" />
        <div className="w-full">
          <p className="text-gray-500 text-sm">Manzilingiz</p>
          <div className="flex w-full">
            <div className="mr-2 w-full">
              <SelectInput placeholder={"viloyat"} options={regions} />
            </div>
            <div className="w-full">
              <SelectInput placeholder={"tuman"} options={districts} />
            </div>
          </div>
        </div>
        <Input placeholder="Parol" margin="mt-2" type="password" />
        <Input placeholder="Parolni tasdiqlang" type="password" />
        <Button title="Kirish" />
      </form>
    </div>
  );
};

export default SignUpModal;
