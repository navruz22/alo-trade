import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editProfileImage,
  getUser,
  updateOrganization,
} from "../../Pages/Sign/signSlice";
import { capitalize, filter, forEach, map, some } from "lodash";
import { checkOrganization } from "./constants";
import ImageCrop from "../ImageCrop/ImageCrop";
import Input from "../Inputs/Input";
import SaveButton from "../Buttons/SaveButton";
import CheckboxList from "../CheckboxList/CheckboxList";
import SelectRegion from "../Select/SelectRegion";
import SelectCategory from "../Select/SelectCategory";
import { useTranslation } from "react-i18next";
import { getTranslations } from "../../translation";
import CompanyRegister from "../MainPageHeader/CompanyRegister";
import Filter from "../../Pages/Filter/Filter";
import {
  filterCategories,
  filterSubcategories,
  filterSubcategories2,
} from "../../Pages/Filter/filterSlice";
import { getSubcategories } from "../../Pages/Category/categorySlice";

const EditOrganization = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation(["common"]);
  const {
    tashkilot_nomi,
    telefon_raqam,
    email: Email,
    davlat,
    viloyat,
    savdo_turingizni_tanlang,
    kategoriya,
    kategoriya_turi,
    saqlash,
    tashkilot_haqida,
  } = getTranslations(t);
  const { loading, userData } = useSelector((state) => state.login);
  const { organization } = userData;
  const { regions } = useSelector((state) => state.regions);
  const { tradetypes } = useSelector((state) => state.trade);
  const { categoriesWithSubcategories } = useSelector(
    (state) => state.categories
  );
  const {
    subcategories: subcategoriesList,
    subcategories2: subcategoriesList2,
  } = useSelector((state) => state.filter);
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
  const [description, setDescription] = useState(
    organization?.description || ""
  );
  const [address, setAddress] = useState("");

  const [isVisibleFilter, setIsVisibleFilter] = useState(false);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    name === "name" && setName(capitalize(value));
    name === "phone" && setPhone(value);
    name === "email" && setEmail(value);
    name === "address" && setAddress(value);
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
    setCategories([e]);
    dispatch(filterSubcategories([]));
    dispatch(filterSubcategories2([]));
    dispatch(filterCategories([e.value]));
    dispatch(getSubcategories({ category: e.value }));
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
    const data = {
      name,
      phone,
      region: region.value,
      district: district.value,
      categories: Categories,
      subcategories: subcategoriesList,
      subcategories2: subcategoriesList2,
      tradetypes: tradeTypes,
      email,
      id: organization?._id,
      description,
      address,
    };
    const check = checkOrganization({
      ...data,
      t,
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
    organization.categories && setCategories(organization.categories);
    if (organization.categories && organization.categories.length > 0) {
      const data = [];
      forEach(organization.categories, (category) =>
        forEach(category.subcategories, (subcategory) => data.push(subcategory))
      );
      setAllSubcategories(data);
    }
    dispatch(getSubcategories({ category: organization.categories[0].value }));
    organization?.subcategories.length > 0 &&
      dispatch(
        filterSubcategories([
          ...organization.subcategories.map((el) => el.value),
        ])
      );
    organization?.subcategories2.length > 0 &&
      dispatch(
        filterSubcategories2([
          ...organization.subcategories2.map((el) => el.value),
        ])
      );
    organization.tradetypes && setTradeTypes(organization.tradetypes);
    organization.address && setAddress(organization.address);
  };
  useEffect(() => {
    dispatch(getUser()).then(({ error, payload }) => {
      if (!error) {
        const { organization } = payload;
        organization && setAllDatas(organization);
      }
    });
  }, [dispatch]);

  if (!organization) {
    return <CompanyRegister />;
  }

  return (
    <>
      {isVisibleFilter && (
        <div
          className="fixed top-0 left-0 w-full h-full z-[100] bg-black bg-opacity-50 "
          onClick={() => setIsVisibleFilter(false)}
        >
          <Filter
            onClick={() => setIsVisibleFilter(false)}
            setFilterVisible={() => setIsVisibleFilter(false)}
            filterVisible={isVisibleFilter}
          />
        </div>
      )}
      <div className="p-5 md:flex ">
        <div className="md:w-1/3">
          <ImageCrop
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
            approve={handleChangeImage}
            output={image}
          />
        </div>
        <div className="w-full">
          <div className="md:grid md:grid-cols-3 md:gap-4">
            <Input
              placeholder={tashkilot_nomi}
              label={tashkilot_nomi}
              name="name"
              value={name}
              onChange={changeHandler}
              onKeyUp={enterHandler}
            />
            <Input
              placeholder={telefon_raqam}
              label={telefon_raqam}
              name="phone"
              value={phone}
              onChange={changeHandler}
              onKeyUp={enterHandler}
            />
            <Input
              placeholder={Email}
              label="Email"
              name="email"
              value={email}
              onChange={changeHandler}
              onKeyUp={enterHandler}
            />
          </div>
          <SelectRegion
            region={region}
            regions={regions}
            selectRegion={selectRegion}
            districts={districts}
            district={district}
            selectDistrict={selectDistrict}
            loading={loading}
            labelRegion={davlat}
            labelDistrict={viloyat}
          />
          <Input
            label={"Адрес"}
            placeholder={"Адрес"}
            name={"address"}
            onChange={changeHandler}
            value={address}
            onKeyUp={enterHandler}
          />
          <div className="mb-2 w-full">
            <CheckboxList
              list={tradetypes}
              onChange={changeTradeTypes}
              headerText={savdo_turingizni_tanlang}
              checkedList={tradeTypes}
              headerStyle="text-sm text-[#777] font-normal"
              cols={2}
            />
          </div>
          <SelectCategory
            kategoriya_turi={kategoriya_turi}
            kategoriya={kategoriya}
            categories={categories}
            selectSubcategory={selectSubcategory}
            subcategories={subcategories}
            selectCategory={selectCategory}
            loading={loading}
            allSubcategories={allSubcategories}
            categoriesWithSubcategories={categoriesWithSubcategories}
            openSubcategories={() => setIsVisibleFilter(true)}
          />
          <textarea
            value={description}
            placeholder={tashkilot_haqida}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full outline-0 border border-neutral-200 rounded p-2 mt-2 text-sm"
          />
          <SaveButton
            isDisabled={loading}
            title={saqlash}
            onClick={submitHandler}
            className="mt-3 w-full"
          />
        </div>
      </div>
    </>
  );
};

export default EditOrganization;
