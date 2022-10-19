import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

const Sign = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path={"/sign-in"} element={<SignIn />}></Route>
      <Route path={"/sign-up/*"} element={<SignUp />}></Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default Sign;
