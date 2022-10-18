import React from "react";
import { Link, Navigate, Outlet, Route, Routes } from "react-router-dom";
import UserRegister from "../../Components/Sign/UserRegister";
import BusinessmanRegister from "../../Components/Sign/BusinessmanRegister";

const SignUp = () => {
  const [url, setUrl] = React.useState("sign-up");

  const changeUrl = (e) => {
    setUrl(e.target.name);
  };

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
              <Route path="/" element={<UserRegister />} />
              <Route path="business" element={<BusinessmanRegister />} />
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
