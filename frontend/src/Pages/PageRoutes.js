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

const PageRoutes = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { categoriesWithSubcategories: categories } = useSelector(
    (state) => state.categories
  );
  const { tradetypes } = useSelector((state) => state.trade);
  const { regions } = useSelector((state) => state.regions);
  const [pathName, setPathName] = useState(location.pathname.split("/")[1]);

  const filterVisible =
    pathName !== "profile" &&
    pathName !== "sign-in" &&
    pathName !== "sign-up" &&
    pathName !== "offers";

  useEffect(() => {
    dispatch(getTradeTypes());
    dispatch(getAllCategories());
    dispatch(getAllregions());
  }, [dispatch]);
  useEffect(() => {
    setPathName(location.pathname.split("/")[1]);
  }, [location.pathname]);
  return (
    <section className="flex flex-col w-full h-screen max-h-screen">
      <Navbar />
      <div className="w-full h-full overflow-hidden">
        <div className="flex flex-row h-full overflow-hidden">
          {filterVisible && (
            <Filter
              categories={categories}
              regions={regions}
              tradeTypes={tradetypes}
            />
          )}
          <Suspense fallback={<Loader />}>
            <Routes>{protectedRoutes()}</Routes>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default PageRoutes;
