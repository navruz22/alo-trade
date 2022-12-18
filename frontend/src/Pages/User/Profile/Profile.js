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

  console.log(user);
  console.log(organization);
  return (
    <div className="md:container h-full">
      <div className="bg-white w-full h-full md:flex flex-col md:flex-row">
        {/* <Outlet /> */}
        <ProfileRouteLinks menu={organization ? menuOrganization : menuUser} />
        <ProfileRoutes routes={routes} />
      </div>
    </div>
  );
};

export default Profile;
