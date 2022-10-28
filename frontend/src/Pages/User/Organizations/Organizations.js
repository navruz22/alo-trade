import React, { useEffect, useState } from "react";
import CardLogo from "../../../Components/OrganizationCard/CardLogo";
import CardInfo from "../../../Components/OrganizationCard/CardInfo";
import { useDispatch, useSelector } from "react-redux";
import { onScroll } from "../globalConstants";
import { getOrdersByFilter } from "../Orders/orderSlice";
import { getOrganizations } from "./organizationSlice";
import MainPageHeader from "../../../Components/MainPageHeader/MainPageHeader";
import { map, uniqueId } from "lodash";

const Organizations = () => {
  const dispatch = useDispatch();
  const { logged } = useSelector((state) => state.login);
  const { organizations } = useSelector((state) => state.organizations);
  const { order, categories, subcategories, tradetypes, regions, districts } =
    useSelector((state) => state.filter);

  const [currentPage, setCurrentPage] = useState(0);
  const countPage = 4;

  const handleScroll = (e) => {
    onScroll({
      e,
      currentPage,
      setCurrentPage,
      countPage,
      orders: [...organizations],
    });
  };

  useEffect(() => {
    const data = {
      page: 0,
      count: 4,
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

    currentPage !== 0 && dispatch(getOrdersByFilter(data));
    //    eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, order, currentPage, countPage]);

  return (
    <div
      className="h-screen w-full pb-20 bg-neutral-100 overflow-scroll p-4 "
      onScroll={handleScroll}
    >
      {!logged && <MainPageHeader />}

      {logged &&
        map(
          organizations,
          ({
            image,
            name,
            user,
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
              className="grid grid-cols-12 gap-4 border-b py-5"
            >
              <CardLogo logo={image} name={name} />
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
  );
};

export default Organizations;
