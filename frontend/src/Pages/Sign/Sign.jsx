import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

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
