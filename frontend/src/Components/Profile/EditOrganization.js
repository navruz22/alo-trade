import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editProfileImage,
  getUser,
  updateOrganization,
  updateUser,
} from "../../Pages/Sign/signSlice";
import { capitalize, filter, forEach, map, some, uniqueId } from "lodash";
import { checkOrganization, checkUser } from "./constants";
import ImageCrop from "../ImageCrop/ImageCrop";
import Input from "../Inputs/Input";
import SelectInput from "../SelectInput/SelectInput";
import Checkbox from "../CheckboxList/Checkbox";
import SaveButton from "../Buttons/SaveButton";

const EditOrganization = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.login);
  const { regions } = useSelector((state) => state.regions);
  const { tradetypes } = useSelector((state) => state.trade);
  const { categoriesWithSubcategories } = useSelector(
    (state) => state.categories
  );

  const [modalIsOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState(null);
  const handleChangeImage = (croppedImage) => {
    const formData = new FormData();
    formData.append("file", croppedImage);
    dispatch(editProfileImage(formData)).then(({ error, payload }) => {
      if (!error) {
        setIsOpen(false);
        setImage(payload);
      }
    });
  };

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [email, setEmail] = useState("");
  const [districts, setDistricts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [tradeTypes, setTradeTypes] = useState([]);
  const [allSubcategories, setAllSubcategories] = useState([]);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value.trim();
    name === "name" && setName(capitalize(value));
    name === "phone" && setPhone(value);
    name === "email" && setEmail(value);
  };

  const selectRegion = (e) => {
    setRegion(e);
    setDistricts(e.districts);
  };

  const selectDistrict = (e) => {
    setDistrict(e);
  };

  const changeTradeTypes = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    const filtered = filter(tradeTypes, (tradeType) => tradeType !== value);
    checked
      ? setTradeTypes([...filtered, value])
      : setTradeTypes([...filtered]);
  };

  const filterSubcategory = (categories) => {
    const filterSubcategory = filter(subcategories, (subcategory) =>
      some(categories, ["value", subcategory.category])
    );
    setSubcategories(filterSubcategory);
  };

  const filterAllSubcategories = (e) => {
    let subCategories = [];
    forEach(e, (category) => subCategories.push(...category.subcategories));
    setAllSubcategories(subCategories);
  };
  const selectCategory = (e) => {
    setCategories(e);
    filterAllSubcategories(e);
    filterSubcategory(e);
  };

  const selectSubcategory = (e) => {
    filterAllSubcategories(categories);
    setSubcategories(e);
  };

  const enterHandler = (e) => {
    e.preventDefault();
    e.key === "Enter" && submitHandler();
  };

  const submitHandler = () => {
    const Categories = map(categories, (category) => category.value);
    const subCategories = map(
      subcategories,
      (subcategory) => subcategory.value
    );
    const data = {
      name,
      phone,
      region: region.value,
      district: district.value,
      categories: Categories,
      subcategories: subCategories,
      tradetypes: tradeTypes,
      email,
    };
    const check = checkOrganization({
      ...data,
    });
    if (image !== null) {
      data.image = image;
    }
    check && createHandler(data);
  };

  const createHandler = (data) => {
    dispatch(updateOrganization(data)).then(({ error, payload }) => {
      if (!error) {
        const { organization } = payload;
        setAllDatas(organization);
      }
    });
  };

  const setAllDatas = (organization) => {
    organization.name && setName(organization.name);
    organization.phone && setPhone(organization.phone);
    organization.email && setEmail(organization.email);
    organization.region && setRegion(organization.region);
    organization.district && setDistrict(organization.district);
    organization.image && setImage(organization.image);
    organization.categories &&
      setCategories(
        filter(categoriesWithSubcategories, (category) =>
          some(organization.categories, ["value", category.value])
        )
      );
    organization.subcategories && setSubcategories(organization.subcategories);
    organization.tradetypes && setTradeTypes(organization.tradetypes);
  };

  useEffect(() => {
    categoriesWithSubcategories?.length > 0 &&
      dispatch(getUser()).then(({ error, payload }) => {
        if (!error) {
          const { organization } = payload;
          organization && setAllDatas(organization);
        }
      });
  }, [dispatch, categoriesWithSubcategories]);

  return (
    <div className="p-5 flex ">
      <div className="w-1/3">
        <ImageCrop
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          approve={handleChangeImage}
          output={image}
        />
      </div>
      <div className="w-full">
        <div className="grid grid-cols-3 gap-4">
          <Input
            placeholder="Tashkilot nomi"
            label="Tashkilot nomi"
            name="name"
            value={name}
            onChange={changeHandler}
            onKeyUp={enterHandler}
          />
          <Input
            placeholder="Telefon raqami"
            label="Telefon raqami"
            name="phone"
            value={phone}
            onChange={changeHandler}
            onKeyUp={enterHandler}
          />
          <Input
            placeholder="email"
            label="Email"
            name="email"
            value={email}
            onChange={changeHandler}
            onKeyUp={enterHandler}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mr-3 w-full">
            <p className="text-neutral-500 text-sm mt-[7px]">Viloyat</p>
            <SelectInput
              placeholder="Viloyat"
              options={regions}
              onSelect={selectRegion}
              value={region}
              name="region"
              isDisabled={loading}
            />
          </div>
          <div className="w-full">
            <p className="text-neutral-500 text-sm mt-[7px]">Tuman</p>
            <SelectInput
              placeholder="Viloyat"
              value={district}
              options={districts}
              onSelect={selectDistrict}
              name={"district"}
              isDisabled={loading}
            />
          </div>
        </div>
        <div className="mb-2 w-full">
          <h1 className="text-sm text-neutral-500 mt-4">
            Savdo turingizni tanlang
          </h1>
          <div className="grid grid-cols-2">
            {map(tradetypes, (data) => (
              <Checkbox
                key={uniqueId("tradeType")}
                data={data}
                onChange={changeTradeTypes}
                checked={tradeTypes?.some((item) => item === data.value)}
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
        <SaveButton
          isDisabled={loading}
          title="Saqlash"
          onClick={submitHandler}
          className="mt-3 w-full"
        />
      </div>
    </div>
  );
};

export default EditOrganization;
