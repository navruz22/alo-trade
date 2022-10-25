import React, { useEffect, useState } from "react";
import { Link, Navigate, Outlet, Route, Routes } from "react-router-dom";
import UserRegister from "../../../Components/Sign/UserRegister";
import BusinessmanRegister from "../../../Components/Sign/BusinessmanRegister";
import { useDispatch, useSelector } from "react-redux";
import { clearError, getAllregions } from "../../Filter/regionsSlice";
import { capitalize, filter, forEach, map, some } from "lodash";
import { signUpOrganization, signUpUser } from "../signSlice";
import { checkHandler } from "../constants";
import {
  getAllCategories,
  clearErrorCategories,
} from "../../Category/categorySlice";
import { getTradeTypes } from "../../Filter/tradeSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const { regions, error: errorRegion } = useSelector((state) => state.regions);
  const { categoriesWithSubcategories, error: errorCategories } = useSelector(
    (state) => state.categories
  );
  const { loading } = useSelector((state) => state.login);
  const { tradetypes } = useSelector((state) => state.trade);
  const href = window.location.href.split("/");
  const [url, setUrl] = useState(href[href.length - 1]);
  const changeUrl = (e) => {
    setUrl(e.target.name);
  };

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [allSubcategories, setAllSubcategories] = useState([]);
  const [name, setName] = useState("");
  const [tradeTypes, setTradeTypes] = useState([]);

  const clearDatas = () => {
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setPhone("");
    setRegion("");
    setDistrict("");
    setCategories([]);
    setSubcategories([]);
    setName("");
  };

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    name === "firstname" && setFirstname(capitalize(value));
    name === "lastname" && setLastname(capitalize(value));
    name === "email" && setEmail(value);
    name === "password" && setPassword(value);
    name === "confirmPassword" && setConfirmPassword(value);
    name === "district" && setDistrict(value);
    name === "phone" && setPhone(value);
    name === "name" && setName(value.toUpperCase());
  };

  const selectRegion = (e) => {
    setRegion(e);
    setDistricts(e.districts);
  };

  const selectDistrict = (e) => {
    setDistrict(e);
  };

  const filterSubcategory = (categories) => {
    const filterSubcategory = filter(subcategories, (subcategory) =>
      some(categories, ["value", subcategory.category])
    );
    setSubcategories(filterSubcategory);
  };

  const selectCategory = (e) => {
    setCategories(e);
    let subCategories = [];
    forEach(e, (category) => subCategories.push(...category.subcategories));
    setAllSubcategories(subCategories);
    filterSubcategory(e);
  };

  const selectSubcategory = (e) => {
    setSubcategories(e);
  };

  const changeTradeTypes = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    const filtered = filter(tradeTypes, (tradeType) => tradeType !== value);
    checked
      ? setTradeTypes([...filtered, value])
      : setTradeTypes([...filtered]);
  };

  const enterHandler = (e) => {
    e.preventDefault();
    e.key === "Enter" && submitHandler();
  };

  const submitHandler = () => {
    const data = {
      firstname,
      lastname,
      password,
      phone: "+" + phone,
      region: region.value,
      district: district.value,
    };
    const check = checkHandler({
      ...data,
      url,
      categories,
      subcategories,
      name,
      email,
      confirmPassword,
      tradeTypes,
    });
    if (email !== "") {
      data.email = email;
    }
    check && createHandler(data);
  };

  const createHandler = (data) => {
    const Categories = map(categories, (category) => category.value);
    const subCategories = map(
      subcategories,
      (subcategory) => subcategory.value
    );
    dispatch(
      url === "sign-up"
        ? signUpUser({ ...data })
        : signUpOrganization({
            ...data,
            categories: Categories,
            subcategories: subCategories,
            name,
            tradetypes: tradeTypes,
          })
    ).then(({ error }) => {
      if (!error) clearDatas();
    });
  };

  useEffect(() => {
    dispatch(getAllregions());
    dispatch(getTradeTypes());
  }, [dispatch]);

  useEffect(() => {
    errorRegion && dispatch(clearError());
  }, [errorRegion, dispatch]);

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  useEffect(() => {
    errorCategories && dispatch(clearErrorCategories());
  }, [dispatch, errorCategories]);

  return (
    <div className="w-full h-screen bg-[#EFF2F5] flex flex-col overflow-scroll">
      <div className="container m-auto">
        <div className="container m-auto flex lg:flex-row">
          <div className="lg:w-1/2  hidden lg:block">
            <div className="flex flex-col items-center justify-center h-full text-neutral-700">
              <Link
                onClick={changeUrl}
                name="sign-up"
                to="/sign-up"
                className={`font-semibold text-xl cursor-pointer text-center py-2 px-4 my-3 w-full  ${
                  url === "sign-up" && "bg-white-900 shadow"
                } `}
              >
                Buyurtmachi
              </Link>
              <Link
                onClick={changeUrl}
                name="business"
                to="/sign-up/business"
                className={`font-semibold text-xl cursor-pointer text-center py-2 px-4 my-3 w-full  ${
                  url === "business" && "bg-white-900 shadow"
                }`}
              >
                Tadbirkor
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <Outlet />
            <Routes>
              <Route
                path="/"
                element={
                  <UserRegister
                    firstname={firstname}
                    lastname={lastname}
                    email={email}
                    password={password}
                    confirmPassword={confirmPassword}
                    phone={phone}
                    region={region}
                    district={district}
                    changeHandler={changeHandler}
                    selectRegion={selectRegion}
                    selectDistrict={selectDistrict}
                    regions={regions}
                    districts={districts}
                    enterHandler={enterHandler}
                    submitHandler={submitHandler}
                    loading={loading}
                  />
                }
              />
              <Route
                path="business"
                element={
                  <BusinessmanRegister
                    firstname={firstname}
                    lastname={lastname}
                    email={email}
                    password={password}
                    confirmPassword={confirmPassword}
                    phone={phone}
                    region={region}
                    district={district}
                    changeHandler={changeHandler}
                    selectRegion={selectRegion}
                    selectDistrict={selectDistrict}
                    regions={regions}
                    districts={districts}
                    enterHandler={enterHandler}
                    submitHandler={submitHandler}
                    loading={loading}
                    categoriesWithSubcategories={categoriesWithSubcategories}
                    categories={categories}
                    selectCategory={selectCategory}
                    subcategories={subcategories}
                    allSubcategories={allSubcategories}
                    selectSubcategory={selectSubcategory}
                    name={name}
                    tradetypes={tradetypes}
                    changeTradeTypes={changeTradeTypes}
                    tradeTypes={tradeTypes}
                  />
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
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

export default SignUp;
