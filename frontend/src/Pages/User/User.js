import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

const User = () => {
  const [visible, setVisible] = useState(true);
  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <div className="w-full flex flex-row">
      <div className="w-full">Body</div>
      <div className="w-[400px]">Info</div>
    </div>
  );
};

export default User;
