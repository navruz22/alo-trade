import React from "react";
import { IoSend } from "react-icons/io5";

const ChatInput = ({ changeHandler, enterHandler, sendHandler, value }) => {
  return (
    <div className="bg-white-900 w-full h-[5rem] px-10 py-5 flex">
      <input
        value={value}
        onKeyUp={enterHandler}
        onChange={changeHandler}
        placeholder="message"
        className="border rounded-l w-full py-1 px-3 outline-0"
      />
      <button
        onClick={sendHandler}
        className="px-3 border-r border-y text-neutral-500 rounded-r"
      >
        <IoSend />
      </button>
    </div>
  );
};

export default ChatInput;
