import React from "react";
import Input from "../Inputs/Input";
import Button from "../Buttons/Button";
import LabelButton from "../Buttons/LabelButton";
import SelectInput from "../SelectInput/SelectInput";
import { map, uniqueId } from "lodash";
import Checkbox from "../CheckboxList/Checkbox";

const BusinessmanRegister = ({
  categoriesWithSubcategories,
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
  categories,
  selectCategory,
  subcategories,
  allSubcategories,
  selectSubcategory,
  name,
  tradetypes,
  changeTradeTypes,
  tradeTypes,
}) => {
  return (
    <div className="bg-white-900 rounded ">
      <div className="px-16 py-5">
        <h1 className="font-bold text-center py-4 text-xl text-neutral-700">
          Tashkilot sifatida ro'yxatda o'tish
        </h1>
        <p className="text-neutral-500 text-sm">Shaxsiy ma'lumotlaringiz</p>
        <div className="flex flex-row ">
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
        <div className="flex flex-row">
          <Input
            margin="mr-3"
            isDisabled={loading}
            placeholder="Telefon raqam*"
            type="number"
            value={phone}
            onChange={changeHandler}
            name="phone"
            required={true}
            onKeyUp={enterHandler}
          />
          <Input
            isDisabled={loading}
            placeholder="Email"
            type="email"
            value={email}
            onChange={changeHandler}
            name="email"
            onKeyUp={enterHandler}
          />
        </div>
        <div className="flex flex-grow">
          <Input
            margin="mr-3"
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
        </div>
        <br />
        <p className="text-neutral-500 text-sm">Tashkilot ma'lumotlari</p>
        <Input
          placeholder="Tashkilot nomi*"
          isDisabled={loading}
          value={name}
          onChange={changeHandler}
          name="name"
          required={true}
          onKeyUp={enterHandler}
        />

        <div className="flex flex-row w-full mb-2">
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
        <div className="mb-2">
          <h1 className="text-sm text-neutral-500 mt-4">
            Savdo turingizni tanlang
          </h1>
          <div className="grid grid-cols-2">
            {map(tradetypes, (data) => (
              <Checkbox
                key={uniqueId("tradeType")}
                data={data}
                onChange={changeTradeTypes}
                checked={tradeTypes.some((item) => item === data.value)}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="w-full mr-3">
            <SelectInput
              placeholder="kategoriya*"
              options={categoriesWithSubcategories}
              isMulti={true}
              value={categories}
              isDisabled={loading}
              onSelect={selectCategory}
              closeMenuOnSelect={false}
            />
          </div>
          <div className="w-full">
            <SelectInput
              placeholder="kategoriya turi*"
              options={allSubcategories}
              isMulti={true}
              value={subcategories}
              isDisabled={categories.length === 0 || loading}
              onSelect={selectSubcategory}
              closeMenuOnSelect={false}
            />
          </div>
        </div>
        <Button
          title="Ro'yxatdan o'tish"
          onClick={submitHandler}
          isDisabled={loading}
        />
        <br />
        <LabelButton
          link="../../sign-in"
          label="Avval ro'yxatdan o'tgan bo'lsangiz "
          title={"kirish qismiga qayting"}
        />
      </div>
    </div>
  );
};

export default BusinessmanRegister;
