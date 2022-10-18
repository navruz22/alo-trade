import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../Pages/Sign/signSlice";

export default configureStore({
  devTools: process.env.NODE_ENV === "development",
  reducer: {
    login: loginReducer,
  },
});
