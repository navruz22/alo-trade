import React, { lazy } from "react";
import { map, uniqueId } from "lodash";
import { Navigate, Route } from "react-router-dom";
import Sign from "./Sign/Sign";
import SignUp from "./Sign/Components/SignUp";
import SignIn from "./Sign/Components/SignIn";
// pages -->
const AdminReport = lazy(() => import("./Admin/Admin"));

const otherRoutes = {
  path: "*",
  element: <Navigate to={"/"} replace={true} />,
};
// user pages
const UserReport = lazy(() => import("./User/Main/Main"));
const OrdersReport = lazy(() => import("./User/Orders/Orders"));
const ProductsReport = lazy(() => import("./User/Products/Products"));
const OffersReport = lazy(() => import("./User/Offers/Offers"));
const OrganizationsReport = lazy(() =>
  import("./User/Organizations/Organizations")
);
const ProfileReport = lazy(() => import("./User/Profile/Profile"));
// <-- pages

// routes -->
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
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up/*", element: <SignUp /> },
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

const chooseRoute = () => {
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

const protectedRoutes = () => {
  const catchRoutes = chooseRoute();
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
