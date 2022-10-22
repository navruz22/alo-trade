import { configureStore } from "@reduxjs/toolkit";
import signReducer from "../Pages/Sign/signSlice";
import regionsReducer from "../Pages/Filter/regionsSlice.js";
import categoriesReducer from "../Pages/Category/categorySlice";
import tradeReducer from "../Pages/Filter/tradeSlice";

export default configureStore({
  devTools: process.env.NODE_ENV === "development",
  reducer: {
    login: signReducer,
    regions: regionsReducer,
    categories: categoriesReducer,
    trade: tradeReducer,
  },
});
