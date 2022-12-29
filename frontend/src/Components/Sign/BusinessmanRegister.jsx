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
  // email,
  password,
  // confirmPassword,
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
  translations,
  address,
}) => {
  return (
    <div className="bg-white rounded ">
      <div className="md:px-16 md:py-5">
        <h1 className="font-bold text-center py-4 text-xl text-neutral-700">
          {translations.tashkilot_sifatida_royxatdan_otish}
        </h1>
        <p className="text-neutral-500 text-sm">
          {translations.shaxsiy_malumotlaringiz}
        </p>
        <div className="flex flex-col md:flex-row ">
          <Input
            isDisabled={loading}
            placeholder={translations.ism + "*"}
            margin="mr-3"
            value={firstname}
            onChange={changeHandler}
            name="firstname"
            required={true}
            onKeyUp={enterHandler}
          />
          <Input
            isDisabled={loading}
            placeholder={translations.familiya + "*"}
            value={lastname}
            onChange={changeHandler}
            name="lastname"
            required={true}
            onKeyUp={enterHandler}
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <Input
            margin="mr-3"
            isDisabled={loading}
            placeholder={translations.telefon_raqam + "*"}
            type="text"
            value={phone}
            onChange={changeHandler}
            name="phone"
            required={true}
            onKeyUp={enterHandler}
          />
        </div>
        <div className="flex flex-grow">
          <Input
            margin="mr-3"
            isDisabled={loading}
            placeholder={translations.parol + "*"}
            type="password"
            value={password}
            onChange={changeHandler}
            name="password"
            required={true}
            onKeyUp={enterHandler}
          />
        </div>
        <br />
        <p className="text-neutral-500 text-sm">
          {translations.tashkilot_malumotlari}
        </p>
        <Input
          placeholder={translations.tashkilot_nomi + "*"}
          isDisabled={loading}
          value={name}
          onChange={changeHandler}
          name="name"
          required={true}
          onKeyUp={enterHandler}
        />

        <div className="flex flex-col gap-4 md:gap-0 md:flex-row w-full mb-2">
          <div className="w-full mr-3">
            <SelectInput
              placeholder={translations.davlat + "*"}
              options={regions}
              onSelect={selectRegion}
              value={region}
              name="region"
              isDisabled={loading}
            />
          </div>
          <div className="w-full">
            <SelectInput
              placeholder={translations.viloyat + "*"}
              value={district}
              options={districts}
              onSelect={selectDistrict}
              name={"district"}
              isDisabled={districts.length === 0 || loading}
            />
          </div>
        </div>
        <Input
          placeholder={"Адрес" + "*"}
          isDisabled={loading}
          value={address}
          onChange={changeHandler}
          name="address"
          required={true}
          onKeyUp={enterHandler}
        />
        <div className="mb-2">
          <h1 className="text-sm text-neutral-500 mt-4">
            {translations.savdo_turingizni_tanlang}
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
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row w-full">
          <div className="w-full mr-3">
            <SelectInput
              placeholder={translations.kategoriya + "*"}
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
              placeholder={translations.kategoriya_turi + "*"}
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
          title={translations.royxatdan_otish}
          onClick={submitHandler}
          isDisabled={loading}
        />
        <br />
        <LabelButton
          link="../../sign-in"
          label={translations.avval_royxatdan_otgan_bolsangiz + " "}
          title={translations.kirish_qismiga_qayting}
        />
      </div>
    </div>
  );
};

export default BusinessmanRegister;
