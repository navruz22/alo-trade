import React, { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, useLocation } from "react-router-dom";
import protectedRoutes from "./ProtectedRoutes";
import Loader from "../Components/Loader/Loader";
import Navbar from "./User/Navbar/Navbar";
import Filter from "./Filter/Filter";
import { getAllCategories } from "./Category/categorySlice";
import { getAllregions } from "./Filter/regionsSlice";
import { getTradeTypes } from "./Filter/tradeSlice";
import useWindowSize from "../hooks/useWindowSize";
import MobileNavbar from "./User/Navbar/MobileNavbar";
import Footer from "../Components/Footer/Footer";

const PageRoutes = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { categoriesWithSubcategories: categories } = useSelector(
    (state) => state.categories
  );
  const { tradetypes } = useSelector((state) => state.trade);
  const { regions } = useSelector((state) => state.regions);
  const [pathName, setPathName] = useState(location.pathname.split("/")[1]);

  const { width } = useWindowSize();

  const filterVisible =
    pathName !== "profile" &&
    pathName !== "sign-in" &&
    pathName !== "sign-up" &&
    pathName !== "offers" &&
    pathName !== "organization";

  useEffect(() => {
    setPathName(location.pathname.split("/")[1]);
  }, [location.pathname]);
  return (
    <>
      <section className="flex flex-col w-full">
        <Navbar />
        {width < 720 && <MobileNavbar />}
        {/* {filterVisible && (
        <Filter
          categories={categories}
          regions={regions}
          tradeTypes={tradetypes}
        />
      )} */}
        <Suspense fallback={<Loader />}>
          <Routes>{protectedRoutes()}</Routes>
        </Suspense>
      </section>
    </>
  );
};

export default PageRoutes;
