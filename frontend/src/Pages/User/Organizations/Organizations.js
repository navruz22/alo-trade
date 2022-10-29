import React, { useEffect, useState } from "react";
import CardLogo from "../../../Components/OrganizationCard/CardLogo";
import CardInfo from "../../../Components/OrganizationCard/CardInfo";
import { useDispatch, useSelector } from "react-redux";
import { onScroll } from "../globalConstants";
import {
  getOrganizations,
  getOrganizationsByFilter,
} from "./organizationSlice";
import MainPageHeader from "../../../Components/MainPageHeader/MainPageHeader";
import { map, uniqueId } from "lodash";

const Organizations = () => {
  const dispatch = useDispatch();
  const { logged } = useSelector((state) => state.login);
  const { organizations } = useSelector((state) => state.organizations);
  const { order, categories, subcategories, tradetypes, regions, districts } =
    useSelector((state) => state.filter);

  const [currentPage, setCurrentPage] = useState(0);
  const countPage = 8;

  const handleScroll = (e) => {
    onScroll({
      e,
      currentPage,
      setCurrentPage,
      countPage,
      datas: organizations,
    });
  };

  useEffect(() => {
    const data = {
      page: 0,
      count: 8,
      categories,
      subcategories,
      tradetypes,
      regions,
      districts,
    };
    setCurrentPage(0);
    dispatch(getOrganizations(data));
  }, [
    dispatch,
    order,
    categories,
    subcategories,
    tradetypes,
    regions,
    districts,
  ]);

  useEffect(() => {
    const data = {
      page: currentPage,
      count: countPage,
      categories,
      subcategories,
      tradetypes,
      regions,
      districts,
    };
    currentPage !== 0 && dispatch(getOrganizationsByFilter(data));
    //    eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, order, currentPage, countPage]);

  return (
    <div
      className="h-screen w-full pb-20 bg-neutral-100 overflow-scroll p-4 "
      onScroll={handleScroll}
    >
      {!logged && <MainPageHeader />}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
        {logged &&
          map(
            organizations,
            ({
              image,
              name,
              tradetypes,
              categories,
              subcategories,
              region,
              district,
              phone,
              email,
            }) => (
              <div
                key={uniqueId("organization")}
                className="bg-white-900 overflow-hidden rounded shadow-lg border-t-4 border-amber-500 flex flex-col justify-between"
              >
                <CardLogo
                  logo={image}
                  name={name}
                  region={region}
                  district={district}
                />
                <CardInfo
                  tradetypes={tradetypes}
                  categories={categories}
                  subcategories={subcategories}
                  region={region}
                  district={district}
                  phone={phone}
                  email={email}
                />
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default Organizations;
