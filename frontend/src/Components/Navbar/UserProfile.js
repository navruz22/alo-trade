import React from "react";
import ProfileToggleMenu from "../Profile/ProfileTogglemenu";

const UserProfile = ({ changeHandler, navbarExpended, toggleMenu, user }) => {
  return (
    <div className="relative ">
      <button
        onClick={changeHandler}
        className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-slate-100 rounded-full flex items-center justify-center border border-white-900"
      >
        {user?.image ? (
          <img
            src={user.image}
            alt="avatar"
            className="w-full h-full rounded-full"
          />
        ) : (
          user?.firstname[0].toUpperCase() + user?.lastname[0].toUpperCase()
        )}
      </button>

      {navbarExpended && <ProfileToggleMenu toggleMenu={toggleMenu} />}
    </div>
  );
};

export default UserProfile;
