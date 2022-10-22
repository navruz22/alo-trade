import React from "react";
import ProfileRouteLinks from "../../../Components/Profile/ProfileRouteLinks";
import { menu, routes } from "./constants";
import { Outlet } from "react-router-dom";
import ProfileRoutes from "../../../Components/Profile/ProfileRoutes";

const Profile = () => {
  return (
    <div className="bg-neutral-200 w-full h-full flex flex-grow p-10 overflow-scroll">
      <Outlet />
      <ProfileRouteLinks menu={menu} />
      <ProfileRoutes routes={routes} />
    </div>
  );
};

export default Profile;
