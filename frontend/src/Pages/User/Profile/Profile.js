import React from "react";
import ProfileRouteLinks from "../../../Components/Profile/ProfileRouteLinks";
import { menuOrganization, menuUser, routes } from "./constants";
import { Outlet } from "react-router-dom";
import ProfileRoutes from "../../../Components/Profile/ProfileRoutes";
import { useSelector } from "react-redux";

const Profile = () => {
  const {
    logged,
    userData: { user, organization },
  } = useSelector((state) => state.login);

  return (
    <div className="md:container h-full">
      <div className="w-[45px] h-[45px] bg-white md:w-full md:h-full md:flex flex-col md:flex-row">
        {/* <Outlet /> */}
        <ProfileRouteLinks menu={organization ? menuOrganization : menuUser} />
        <ProfileRoutes routes={routes} />
      </div>
    </div>
  );
};

export default Profile;
