import { configureStore } from "@reduxjs/toolkit";
import signReducer from "../Pages/Sign/signSlice";
import regionsReducer from "../Pages/Address/regionsSlice.js";
import categoriesReducer from "../Pages/Category/categorySlice";

export default configureStore({
  devTools: process.env.NODE_ENV === "development",
  reducer: {
    login: signReducer,
    regions: regionsReducer,
    categories: categoriesReducer,
  },
});
