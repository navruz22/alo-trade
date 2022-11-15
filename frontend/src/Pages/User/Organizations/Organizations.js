import React, { useEffect, useState } from "react";
import CardLogo from "../../../Components/OrganizationCard/CardLogo";
import CardInfo from "../../../Components/OrganizationCard/CardInfo";
import { useDispatch, useSelector } from "react-redux";
import { getOrganizations, getOrganizationsCount } from "./organizationSlice";
import { map, uniqueId } from "lodash";
import Pagination from "../../../Components/Pagination/Pagination";
import { useTranslation } from "react-i18next";
import { getTranslations } from "../../../translation";

const Organizations = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation(["common"]);
  const translations = getTranslations(t);
  const {
    logged,
    userData: { organization },
  } = useSelector((state) => state.login);
  const { organizations } = useSelector((state) => state.organizations);
  const {
    order,
    categories,
    subcategories,
    tradetypes,
    regions,
    districts,
    name,
  } = useSelector((state) => state.filter);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalDatas, setTotalDatas] = useState(0);
  const countPage = 10;

  useEffect(() => {
    const data = {
      page: 0,
      count: countPage,
      categories,
      subcategories,
      tradetypes,
      regions,
      districts,
      name,
    };
    setCurrentPage(0);
    dispatch(getOrganizations(data));
    dispatch(getOrganizationsCount(data)).then(
      ({ payload: { totalCount }, error }) => {
        if (!error) {
          setTotalDatas(totalCount);
        }
      }
    );
  }, [
    dispatch,
    order,
    categories,
    subcategories,
    tradetypes,
    regions,
    districts,
    name,
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
      name,
    };
    dispatch(getOrganizations(data));
    dispatch(getOrganizationsCount(data)).then(
      ({ payload: { totalCount }, error }) => {
        if (!error) {
          setTotalDatas(totalCount);
        }
      }
    );
    //    eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, order, currentPage, countPage]);

  return (
    <div className="h-full w-full  bg-neutral-100 flex flex-col justify-between">
      <div className="bg-white-900 py-3 shadow-md flex justify-between items-center px-4">
        <h3 className="font-amazonbold">
          Jami tashkilotlar:{" "}
          <span className="text-primary-900">{totalDatas} ta</span>
        </h3>
        {totalDatas > 0 && (
          <Pagination
            currentPage={currentPage}
            countPage={countPage}
            setCurrentPage={setCurrentPage}
            totalDatas={totalDatas}
          />
        )}
      </div>
      <div className="h-full overflow-scroll p-4">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
          {map(
            organizations,
            ({
              _id,
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
                  translations={translations}
                  _id={_id}
                  isOrganization={!!organization}
                  logged={logged}
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
    </div>
  );
};

export default Organizations;
