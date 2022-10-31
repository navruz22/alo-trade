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
          <p className="text-sm text-neutral-500 text-end">
            {new Date(createdAt).toLocaleTimeString().slice(0, 5)}{" "}
            {new Date(createdAt).toLocaleDateString()}
          </p>
        </div>
        <p className="text-neutral-600">{message}</p>
      </div>
      <div className=" w-16 flex justify-center items-center">
        <img
          src={"https://picsum.photos/200"}
          alt="Alotarade"
          className="w-12 h-12 rounded-full"
        />
      </div>
    </div>
  );
};

export default ChatIncomingMessage;
