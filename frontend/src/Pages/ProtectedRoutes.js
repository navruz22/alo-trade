import React, { lazy } from "react";
import { map, uniqueId } from "lodash";
import { Navigate, Route } from "react-router-dom";
// pages -->
const AdminReport = lazy(() => import("./Admin/Admin"));
const OrganizationReport = lazy(() => import("./Organization/Organization"));

const otherRoutes = {
  path: "*",
  element: <Navigate to={"/"} replace={true} />,
};
// user pages
const UserReport = lazy(() => import("./User/User"));
const OrdersReport = lazy(() => import("./User/Orders/Orders"));
const ProductsReport = lazy(() => import("./User/Products/Products"));
const OffersReport = lazy(() => import("./User/Offers/Offers"));
const OrganizationsReport = lazy(() =>
  import("./User/Organizations/Organizations")
);
const ProfileReport = lazy(() => import("./User/Profile/Profile"));
// <-- pages

// routes -->
const organizationRoutes = [
  {
    path: "/",
    element: <OrganizationReport />,
  },
  otherRoutes,
];
const userRoutes = [
  {
    path: "/",
    element: <UserReport />,
  },
  {
    path: "/orders",
    element: <OrdersReport />,
  },
  {
    path: "/products",
    element: <ProductsReport />,
  },
  {
    path: "/offers",
    element: <OffersReport />,
  },
  {
    path: "/organizations",
    element: <OrganizationsReport />,
  },
  {
    path: "/profile/*",
    element: <ProfileReport />,
  },
  otherRoutes,
];
const adminRoutes = [
  {
    path: "/",
    element: <AdminReport />,
  },
  otherRoutes,
];

const chooseRoute = (type) => {
  return userRoutes;
  // switch (type) {
  //   case "organization":
  //     return organizationRoutes;
  //   case "user":
  //     return userRoutes;
  //   case "admin":
  //     return adminRoutes;
  //   default:
  //     return [
  //       {
  //         path: "/",
  //         element: <h1>Sahifa mavjud emas</h1>,
  //       },
  //     ];
  // }
};

const protectedRoutes = (type) => {
  const catchRoutes = chooseRoute(type.toLowerCase());
  return map(catchRoutes, (route) => (
    <Route
      exact
      key={uniqueId("route")}
      path={route.path}
      element={route.element}
    />
  ));
};
export default protectedRoutes;
