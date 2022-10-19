import React from "react";
import Button from "../Components/Buttons/Button";
import { useDispatch } from "react-redux";
import { logOut } from "./Sign/signSlice";

const PageRoutes = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <Button onClick={logout} title={"chiqish"} />
    </div>
  );
};

export default PageRoutes;
