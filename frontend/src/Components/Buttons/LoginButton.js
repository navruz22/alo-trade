import React from "react";

const LoginButton = ({ title }) => {
  return (
    <button className="bg-neutral-800 block px-4 py-2 rounded-md text-white-900">
      {title}
    </button>
  );
};

export default LoginButton;
