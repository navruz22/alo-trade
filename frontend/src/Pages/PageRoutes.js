import React, { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, useLocation } from "react-router-dom";
import protectedRoutes from "./ProtectedRoutes";
import Loader from "../Components/Loader/Loader";
import Navbar from "./Navbar/Navbar";
import Filter from "./Filter/Filter";
import { getAllCategories } from "./Category/categorySlice";
import { getAllregions } from "./Filter/regionsSlice";
import { getTradeTypes } from "./Filter/tradeSlice";

const PageRoutes = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { user } = useSelector((state) => state.login);
  const { categoriesWithSubcategories: categories } = useSelector(
    (state) => state.categories
  );
  const { tradetypes } = useSelector((state) => state.trade);
  const { regions } = useSelector((state) => state.regions);
  const [type, setType] = useState(user.type);
  const [pathName, setPathName] = useState(location.pathname.split("/")[1]);

  useEffect(() => {
    setType(user.type);
  }, [user]);

  useEffect(() => {
    dispatch(getTradeTypes());
    dispatch(getAllCategories());
    dispatch(getAllregions());
  }, [dispatch]);

  useEffect(() => {
    setPathName(location.pathname.split("/")[1]);
  }, [location.pathname]);
  return (
    <section>
      <Navbar />
      <div className={"fixed top-0 w-full"}>
        <div className="pt-14 flex flex-row w-full">
          {pathName !== "profile" && (
            <Filter
              categories={categories}
              regions={regions}
              tradeTypes={tradetypes}
            />
          )}
          <div className="h-screen overflow-scroll w-full">
            <Suspense fallback={<Loader />}>
              <Routes>{protectedRoutes(type)}</Routes>
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageRoutes;
