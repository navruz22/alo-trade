import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginButton from "../../../Components/Buttons/LoginButton";
import Logo from "../../../Components/Logo/Logo";
import Menu from "../../../Components/Navbar/Menu";
import { navs, toggleMenu } from "./constants";
import UserProfile from "../../../Components/Navbar/UserProfile";
import { logOut } from "../../Sign/signSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [navbarExpended, setNavbarExpended] = useState(false);
  const changeHandler = () => {
    setNavbarExpended(!navbarExpended);
  };
  const {
    userData: { user },
  } = useSelector((state) => state.login);
  const closeHandler = () => {
    dispatch(logOut());
    setNavbarExpended(false);
  };
  const toggle = toggleMenu(closeHandler, changeHandler);
  return (
    <nav className="shadow shadow-md py-1 w-full bg-primary-800 z-50  ">
      <div className="flex justify-between m-auto container items-center">
        <Logo />
        <Outlet />
        <Menu navs={navs} />
        <div className="">
          {user ? (
            <UserProfile
              user={user}
              toggleMenu={toggle}
              navbarExpended={navbarExpended}
              changeHandler={changeHandler}
            />
          ) : (
            <LoginButton title="kirish" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
