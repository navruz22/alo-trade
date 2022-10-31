import React from "react";

const ChatIncomingMessage = () => {
  return (
    <div className="w-full flex flex-row my-3">
      <div className=" w-16 flex justify-center items-center">
        <img
          src={"https://picsum.photos/200"}
          alt="Alotarade"
          className="w-12 h-12 rounded-full"
        />
      </div>
      <div className="w-2/3 bg-white-900 rounded shadow-md px-2">
        <div className="flex justify-between">
          <h3 className="font-amazonbold text-neutral-500 text-[15px]">
            Sarvar Murodullayev
          </h3>
          <p className="text-sm text-neutral-500 text-end">
            {new Date().toLocaleTimeString().slice(0, 5)}{" "}
            {new Date().toLocaleDateString()}
          </p>
        </div>
        <p className="text-neutral-600">
          Redundant alt attribute. Screen-readers already announce `img` tags as
          an image. You don’t need to use the words `image`, `photo,` or
          `picture` (or any specified custom words) in the alt prop
        </p>
      </div>
    </div>
  );
};

export default ChatIncomingMessage;
