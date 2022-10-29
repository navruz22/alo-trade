import { configureStore } from "@reduxjs/toolkit";
import signReducer from "../Pages/Sign/signSlice";
import regionsReducer from "../Pages/Filter/regionsSlice.js";
import categoriesReducer from "../Pages/Category/categorySlice";
import tradeReducer from "../Pages/Filter/tradeSlice";
import ordersReducer from "../Pages/User/Orders/orderSlice";
import filterReducer from "../Pages/Filter/filterSlice";
import organizationReducer from "../Pages/User/Organizations/organizationSlice";
import productsReducer from "../Pages/User/Products/productSlice";

export default configureStore({
  devTools: process.env.NODE_ENV === "development",
  reducer: {
    login: signReducer,
    regions: regionsReducer,
    categories: categoriesReducer,
    trade: tradeReducer,
    orders: ordersReducer,
    filter: filterReducer,
    organizations: organizationReducer,
    products: productsReducer,
  },
});
