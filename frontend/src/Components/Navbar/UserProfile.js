import React from "react";
import ProfileToggleMenu from "../Profile/ProfileTogglemenu";

const UserProfile = ({ changeHandler, navbarExpended, toggleMenu, user }) => {
  return (
    <div className="relative ">
      <button
        onClick={changeHandler}
        className="w-[50px] h-[50px] bg-neutral-500 rounded-full flex items-center justify-center border border-white-900"
      >
        {user.image ? (
          <img src={user.image} alt="avatar" />
        ) : (
          user.firstname[0].toUpperCase() + user.lastname[0].toUpperCase()
        )}
      </button>

      {navbarExpended && <ProfileToggleMenu toggleMenu={toggleMenu} />}
    </div>
  );
};

export default UserProfile;
