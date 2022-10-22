import React from "react";
import { Route, Routes } from "react-router-dom";
import { map, uniqueId } from "lodash";
import { routes } from "../../Pages/User/Profile/constants";

const ProfileRoutes = ({ routes }) => {
  return (
    <div className="w-full h-full bg-white-900 rounded shadow-lg">
      <Routes>
        {map(routes, (route) => (
          <Route
            exact
            key={uniqueId("profile")}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </div>
  );
};

export default ProfileRoutes;
