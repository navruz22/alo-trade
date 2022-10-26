import React from "react";
import { Link } from "react-router-dom";

const LoginButton = ({ title }) => {
  return (
    <Link
      to="/sign-in"
      className="bg-neutral-800 block px-4 py-2 rounded-md text-white-900"
    >
      {title}
    </Link>
  );
};

export default LoginButton;
