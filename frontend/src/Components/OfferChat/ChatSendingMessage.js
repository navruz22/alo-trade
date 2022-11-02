import React from "react";

const ChatIncomingMessage = ({ message: Message }) => {
  const { message, user, createdAt } = Message;
  return (
    <div className="w-full flex flex-row my-3 justify-end">
      <div className="w-2/3 bg-white-900 rounded shadow-md px-2">
        <div className="flex justify-between">
          <h3 className="font-amazonbold text-neutral-500 text-[15px]">
            {user?.firstname} {user?.lastname}
          </h3>
          <p className="text-[12px] text-neutral-500 text-end">
            {new Date(createdAt).toLocaleTimeString().slice(0, 5)}{" "}
            {new Date(createdAt).toLocaleDateString()}
          </p>
        </div>
        <p className="text-neutral-600">{message}</p>
      </div>
      <div className=" w-16 flex justify-center items-center">
        {user?.image ? (
          <img
            src={user.image}
            alt="Alotarade"
            className="w-12 h-12 rounded-full"
          />
        ) : (
          <div className="w-12 h-12 rounded-full uppercase flex items-center justify-center bg-white-900">
            {user?.firstname[0]}
            {user?.lastname[0]}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatIncomingMessage;
