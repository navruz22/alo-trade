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

  const { userData } = useSelector((state) => state.login);
  const { categoriesWithSubcategories: categories } = useSelector(
    (state) => state.categories
  );
  const { tradetypes } = useSelector((state) => state.trade);
  const { regions } = useSelector((state) => state.regions);
  const [type, setType] = useState(userData?.user?.type);
  const [pathName, setPathName] = useState(location.pathname.split("/")[1]);

  useEffect(() => {
    const { user } = userData;
    setType(user?.type);
  }, [userData]);

  useEffect(() => {
    dispatch(getTradeTypes());
    dispatch(getAllCategories());
    dispatch(getAllregions());
  }, [dispatch]);
  useEffect(() => {
    setPathName(location.pathname.split("/")[1]);
  }, [location.pathname]);
  return (
    <section className="flex flex-col w-full h-full max-h-screen">
      <Navbar />
      <div className="flex flex-row w-full overflow-hidden ">
        {pathName !== "profile" && (
          <Filter
            categories={categories}
            regions={regions}
            tradeTypes={tradetypes}
          />
        )}
        <div className="h-screen w-full">
          <Suspense fallback={<Loader />}>
            <Routes>{protectedRoutes(type)}</Routes>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default PageRoutes;
