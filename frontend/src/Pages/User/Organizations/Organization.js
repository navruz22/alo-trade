import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getOrganizationById } from "./organizationSlice";
import noImage from "../../../assets/images/no-image.svg";
import {
  IoBusinessSharp,
  IoCallSharp,
  IoLocationOutline,
  IoLocationSharp,
} from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { map, uniqueId } from "lodash";
import { useTranslation } from "react-i18next";
import { getTranslations } from "../../../translation";
import background1 from "../../../assets/background/1.png";
import background2 from "../../../assets/background/2.png";
import background3 from "../../../assets/background/3.png";
import background4 from "../../../assets/background/4.png";

const Organization = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation(["common"]);
  const {
    aloqa_malumotlari,
    tashkilot_haqida,
    savdo_turi,
    kategoriya,
    kategoriya_turi,
  } = getTranslations(t);
  const [organization, setOrganization] = useState(null);

  const backgrounds = [background1, background2, background3, background4];
  const background = backgrounds[Math.floor(Math.random() * 4)];

  const location = useLocation();
  const { _id } = location.state;

  useEffect(() => {
    dispatch(getOrganizationById({ id: _id })).then(
      ({ error, payload: { organization } }) => {
        if (!error) {
          setOrganization(organization);
        }
      }
    );
  }, [_id, dispatch]);

  return (
    <div className="bg-neutral-200 w-full overflow-scroll">
      <div className="bg-white-800  shadow">
        <div className="container m-auto top-0 my-0">
          <div className="w-full overflow-hidden rounded-b rounded-b-md">
            <img src={background} alt="organization" className="" />
          </div>
          <div className="w-full h-[11rem] flex flex-row">
            <div className="relative w-1/5">
              <div className="w-[12rem] h-[12rem] rounded-full absolute -top-12 bg-white-900 left-20 p-1">
                <img
                  className="w-full h-full rounded-full"
                  src={organization?.image || noImage}
                  alt=""
                />
              </div>
            </div>
            <div className="w-4/5 pl-12 flex mt-9 flex-col">
              <h3 className="font-amazonbold text-[2rem]">
                {organization?.name}
              </h3>
              <p className="flex items-center text-neutral-500">
                <IoLocationOutline />{" "}
                <span className="ml-2">
                  {organization?.region?.label}, {organization?.district?.label}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container m-auto">
        <div className="w-full grid grid-cols-12 mt-3 gap-4">
          <div className="col-span-4 bg-white-800 rounded-md shadow p-4 text-neutral-700">
            <h3 className="text-xl font-amazonbold">{aloqa_malumotlari}</h3>
            <h4 className="flex items-center my-2">
              <IoBusinessSharp size={19} />
              <span className="text-black font-amazonbold ml-2">
                {organization?.name}
              </span>
            </h4>
            <h4 className="flex items-center my-2">
              <IoLocationSharp size={19} />
              <span className="text-black font-amazonbold ml-2">
                {organization?.region?.label}, {organization?.district?.label}
              </span>
            </h4>
            <h4 className="flex items-center my-2">
              <IoCallSharp size={19} />
              <a
                href={`tel:${organization?.phone}`}
                className="text-black font-amazonbold ml-2"
              >
                {organization?.phone}
              </a>
            </h4>
            <h4 className="flex items-center my-2">
              <MdOutlineAlternateEmail size={19} />
              <a
                href={`mailto:${organization?.email}`}
                className="text-black font-amazonbold ml-2"
              >
                {organization?.email}
              </a>
            </h4>
          </div>
          <div className="col-span-8 bg-white-800 rounded-md shadow p-4 text-neutral-700">
            <h3 className="text-xl font-amazonbold">{tashkilot_haqida}</h3>
            <h3>
              {savdo_turi}:
              <p className="pl-10">
                {map(organization?.tradetypes, (type) => (
                  <span key={uniqueId()} className="font-amazonbold">
                    {type?.name}, &nbsp;
                  </span>
                ))}
              </p>
            </h3>
            <h3>
              {kategoriya}:
              <p className="pl-10">
                {map(organization?.categories, (category) => (
                  <span key={uniqueId()} className="font-amazonbold">
                    {category?.label}, &nbsp;
                  </span>
                ))}
              </p>
            </h3>
            <h3>
              {kategoriya_turi}:
              <p className="pl-10 firstUppercase">
                {map(organization?.subcategories, (subcategory) => (
                  <span key={uniqueId()} className="font-amazonbold">
                    {subcategory?.label}, &nbsp;
                  </span>
                ))}
              </p>
            </h3>
            <h3 className="my-2 indent-6 normal-case firstUppercase">
              {organization?.description}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organization;
