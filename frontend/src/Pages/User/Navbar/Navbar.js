import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginButton from "../../../Components/Buttons/LoginButton";
import Logo from "../../../Components/Logo/Logo";
import Menu from "../../../Components/Navbar/Menu";
import { getTranslations, navs, toggleMenu } from "./constants";
import UserProfile from "../../../Components/Navbar/UserProfile";
import { logOut } from "../../Sign/signSlice";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation(["common"]);
  const translations = getTranslations(t);
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
    <div
      class="
        ud-header
        bg-[#03c1f6cc]
        z-40
        w-full
        flex
        items-center
      "
    >
      <div class="container">
        <div class="flex -mx-4 items-center justify-between relative">
          <div class="px-4 w-60 max-w-full">
            <Link
              to="/"
              class="navbar-logo w-full block text-white text-center font-bold text-[32px] border-b-2 border-white"
            >
              alotrade
            </Link>
          </div>
          <div class="flex px-4 justify-between items-center w-full">
            <div>
              <button
                id="navbarToggler"
                class="
                  block
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  lg:hidden
                  focus:ring-2
                  ring-primary
                  px-3
                  py-[6px]
                  rounded-lg
                "
              >
                <span class="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                <span class="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
                <span class="relative w-[30px] h-[2px] my-[6px] block bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                class="
                  absolute
                  py-5
                  lg:py-0 lg:px-4
                  xl:px-6
                  bg-white
                  lg:bg-transparent
                  shadow-lg
                  rounded-lg
                  max-w-[250px]
                  w-full
                  lg:max-w-full lg:w-full
                  right-4
                  top-full
                  hidden
                  lg:block lg:static lg:shadow-none
                "
              >
                <Menu navs={navs} translations={translations} />
              </nav>
            </div>
            <div class="sm:flex justify-end hidden pr-16 lg:pr-0">
              {user ? (
                <UserProfile
                  user={user}
                  toggleMenu={toggle}
                  navbarExpended={navbarExpended}
                  changeHandler={changeHandler}
                />
              ) : (
                <LoginButton title={translations.kirish} />
              )}
            </div>
          </div>
        </div>
        {/* <Logo />
        <Outlet />
        <Menu navs={navs} translations={translations} />
        <div className="">
          {user ? (
            <UserProfile
              user={user}
              toggleMenu={toggle}
              navbarExpended={navbarExpended}
              changeHandler={changeHandler}
            />
          ) : (
            <LoginButton title={translations.kirish} />
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
