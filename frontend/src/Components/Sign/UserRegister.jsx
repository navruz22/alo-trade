import React from "react";
import Input from "../Inputs/Input";
import Button from "../Buttons/Button";
import LabelButton from "../Buttons/LabelButton";
import SelectInput from "../SelectInput/SelectInput";

const UserRegister = ({
  firstname,
  lastname,
  email,
  password,
  confirmPassword,
  phone,
  region,
  district,
  regions,
  districts,
  changeHandler,
  selectRegion,
  selectDistrict,
  enterHandler,
  submitHandler,
  loading,
}) => {
  return (
    <div className="bg-white-900 rounded ">
      <div className="px-16 py-5">
        <h1 className="font-bold text-center py-4 text-xl text-neutral-700">
          Foydalanuvchi sifatida ro'yxatda o'tish
        </h1>
        <div className="flex flex-row">
          <Input
            isDisabled={loading}
            placeholder="Ism*"
            margin="mr-3"
            value={firstname}
            onChange={changeHandler}
            name="firstname"
            required={true}
            onKeyUp={enterHandler}
          />
          <Input
            isDisabled={loading}
            placeholder="Familiya*"
            value={lastname}
            onChange={changeHandler}
            name="lastname"
            required={true}
            onKeyUp={enterHandler}
          />
        </div>
        <Input
          isDisabled={loading}
          placeholder="Email"
          type="email"
          value={email}
          onChange={changeHandler}
          name="email"
          onKeyUp={enterHandler}
        />
        <Input
          isDisabled={loading}
          placeholder="Telefon raqam*"
          type="number"
          value={phone}
          onChange={changeHandler}
          name="phone"
          required={true}
          onKeyUp={enterHandler}
        />
        <div className="flex flex-row w-full">
          <div className="w-full mr-3">
            <SelectInput
              placeholder="viloyat*"
              options={regions}
              onSelect={selectRegion}
              value={region}
              name="region"
              isDisabled={loading}
            />
          </div>
          <div className="w-full">
            <SelectInput
              placeholder="tuman*"
              value={district}
              options={districts}
              onSelect={selectDistrict}
              name={"district"}
              isDisabled={districts.length === 0 || loading}
            />
          </div>
        </div>
        <Input
          isDisabled={loading}
          placeholder="Parol"
          type="password"
          value={password}
          onChange={changeHandler}
          name="password"
          required={true}
          onKeyUp={enterHandler}
        />
        <Input
          isDisabled={loading}
          placeholder="Parolni tasdiqlang"
          type="password"
          value={confirmPassword}
          onChange={changeHandler}
          name={"confirmPassword"}
          required={true}
          onKeyUp={enterHandler}
        />
        <Button
          title="Ro'yxatdan o'tish"
          onClick={submitHandler}
          isDisabled={loading}
        />
        <br />
        <LabelButton
          link="../sign-in"
          label="Avval ro'yxatdan o'tgan bo'lsangiz "
          title={"kirish qismiga qayting"}
        />
      </div>
    </div>
  );
};

export default UserRegister;
