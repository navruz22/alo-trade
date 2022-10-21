import React, { useEffect, useState, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes } from "react-router-dom";
import protectedRoutes from "./ProtectedRoutes";
import Loader from "../Components/Loader/Loader";
import Navbar from "./Navbar/Navbar";
import Filter from "./Filter/Filter";
import { getAllCategories } from "./Category/categorySlice";
import { getAllregions } from "./Address/regionsSlice";

const PageRoutes = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.login);
  const { categoriesWithSubcategories: categories } = useSelector(
    (state) => state.categories
  );
  const { regions } = useSelector((state) => state.regions);
  const [type, setType] = useState(user.type);

  useEffect(() => {
    setType(user.type);
  }, [user]);

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllregions());
  }, [dispatch]);

  return (
    <section>
      <Navbar />
      <div className={"fixed top-0 w-full"}>
        <div className="pt-14 flex flex-row w-full">
          <Filter categories={categories} regions={regions} />
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
