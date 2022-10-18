import React from "react";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav className="z-50">
      <div className="container flex flex-row justify-between m-auto ">
        <div>Logo</div>
        <Menu />
        <div>Login</div>
      </div>
    </nav>
  );
};

export default Navbar;
