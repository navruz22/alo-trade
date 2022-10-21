import React from "react";

const Profile = () => {
  return (
    <div className="p-16 max-w-[900px] m-auto">
      <div className="p-8 bg-white-900 shadow mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <div>
              <p className="font-bold text-neutral-700 text-xl">22</p>
              <p className="text-neutral-400">Friends</p>
            </div>
            <div>
              <p className="font-bold text-neutral-700 text-xl">10</p>
              <p className="text-neutral-400">Photos</p>
            </div>
            <div>
              <p className="font-bold text-neutral-700 text-xl">89</p>
              <p className="text-neutral-400">Comments</p>
            </div>
          </div>
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>

          <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
            <button className="text-white-900 py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Connect
            </button>
            <button className="text-white-900 py-2 px-4 uppercase rounded bg-neutral-700 hover:bg-neutral-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
              Message
            </button>
          </div>
        </div>

        <div className="mt-20 text-center border-b pb-12">
          <h1 className="text-4xl font-medium text-neutral-700">
            Jessica Jones,{" "}
            <span className="font-light text-neutral-500">27</span>
          </h1>
          <p className="font-light text-neutral-600 mt-3">Bucharest, Romania</p>

          <p className="mt-8 text-neutral-500">
            Solution Manager - Creative Tim Officer
          </p>
          <p className="mt-2 text-neutral-500">
            University of Computer Science
          </p>
        </div>

        <div className="mt-12 flex flex-col justify-center">
          <p className="text-neutral-600 text-center font-light lg:px-16">
            An artist of considerable range, Ryan — the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </p>
          <button className="text-indigo-500 py-2 px-4  font-medium mt-4">
            Show more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
