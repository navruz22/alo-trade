import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginButton from "../../../Components/Buttons/LoginButton";
import Logo from "../../../Components/Logo/Logo";
import Menu from "../../../Components/Navbar/Menu";
import { getTranslations, navs, toggleMenu, guestNavs } from "./constants";
import UserProfile from "../../../Components/Navbar/UserProfile";
import { logOut } from "../../Sign/signSlice";
import { useTranslation } from "react-i18next";
import LogoImg from "../../../assets/images/logo.png";
import useWindowSize from "../../../hooks/useWindowSize";

const Navbar = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation(["common"]);
  const translations = getTranslations(t);
  const { width } = useWindowSize();
  const [navbarExpended, setNavbarExpended] = useState(false);
  const [navigations, setNavigations] = useState(navs);
  const changeHandler = () => {
    setNavbarExpended(!navbarExpended);
  };
  const {
    userData: { user },
    logged,
  } = useSelector((state) => state.login);
  const closeHandler = () => {
    dispatch(logOut());
    setNavbarExpended(false);
  };
  const toggle = toggleMenu(closeHandler, changeHandler);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!logged) {
      setNavigations([
        ...navs.filter((nav) => !guestNavs.includes(nav.path.slice(1))),
      ]);
    } else {
      setNavigations(navs);
    }
  }, [logged]);

  return (
    <div
      class="
        ud-header
        bg-alotrade
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
              class="navbar-logo w-full block text-white text-center font-bold text-[32px]"
            >
              <img src={LogoImg} alt="as" width={width < 720 ? 50 : 100} />
            </Link>
          </div>
          <div class="flex px-4 justify-between items-center w-full">
            <div>
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
                  md:block lg:static lg:shadow-none
                "
              >
                <Menu navs={navigations} translations={translations} />
              </nav>
            </div>
            <div class="sm:flex justify-end lg:pr-0">
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
