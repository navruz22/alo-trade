import React, { useEffect, useState } from "react";
import { Link, Navigate, Outlet, Route, Routes } from "react-router-dom";
import UserRegister from "../../../Components/Sign/UserRegister";
import BusinessmanRegister from "../../../Components/Sign/BusinessmanRegister";
import { useDispatch, useSelector } from "react-redux";
import { clearError, getAllregions } from "../../Address/regionsSlice";
import { capitalize } from "lodash";
import { signUp } from "../signSlice";
import { checkHandler } from "../constants";

const SignUp = () => {
  const dispatch = useDispatch();
  const { regions, error: errorRegion } = useSelector((state) => state.regions);
  const { loading } = useSelector((state) => state.login);
  const [url, setUrl] = useState("sign-up");
  const changeUrl = (e) => {
    setUrl(e.target.name);
  };

  const [firstname, setFirstname] = useState("saravar");
  const [lastname, setLastname] = useState("ffsasd");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("123456");
  const [confirmPassword, setConfirmPassword] = useState("123456");
  const [phone, setPhone] = useState("998973666221");
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [districts, setDistricts] = useState([]);

  const changeHandler = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value.trim();
    name === "firstname" && setFirstname(capitalize(value));
    name === "lastname" && setLastname(capitalize(value));
    name === "email" && setEmail(value);
    name === "password" && setPassword(value);
    name === "confirmPassword" && setConfirmPassword(value);
    name === "district" && setDistrict(value);
    name === "phone" && setPhone(value);
  };

  const selectRegion = (e) => {
    setRegion(e);
    setDistricts(e.districts);
  };

  const selectDistrict = (e) => {
    setDistrict(e);
  };

  const enterHandler = (e) => {
    e.preventDefault();
    if (e.key === "Enter") {
    }
  };

  const submitHandler = () => {
    const data = {
      firstname,
      lastname,
      password,
      confirmPassword,
      phone: "+" + phone,
      region: region.value,
      district: district.value,
      email: email || undefined,
    };
    const check = checkHandler({ ...data });
    delete data.confirmPassword;
    if (email === "") {
      delete data.email;
    }
    check && dispatch(signUp({ ...data }));
  };

  useEffect(() => {
    dispatch(getAllregions());
  }, [dispatch]);

  useEffect(() => {
    errorRegion && dispatch(clearError());
  }, [errorRegion, dispatch]);

  return (
    <div className="w-full h-screen bg-[#EFF2F5] flex flex-col ">
      <div className="container m-auto">
        <div className="container m-auto flex lg:flex-row">
          <div className="lg:w-1/2  hidden lg:block">
            <div className="flex flex-col items-center justify-center h-full">
              <Link
                onClick={changeUrl}
                name="sign-up"
                to="/sign-up"
                className={`font-semibold text-xl cursor-pointer text-center py-2 px-4 my-3 w-full ${
                  url === "sign-up" && "bg-white shadow"
                } `}
              >
                Buyurtmachi
              </Link>
              <Link
                onClick={changeUrl}
                name="business"
                to="/sign-up/business"
                className={`font-semibold text-xl cursor-pointer text-center py-2 px-4 my-3 w-full  ${
                  url === "business" && "bg-white shadow"
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
                  />
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      </div>
      <div className="bottom-0 bg-white w-full">
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
