import React, { useState } from "react";
import useConversation from "../../zustand/useConversion";
import { useSocketContext } from "../../context/socketContext";

const Conversation = ({ chat, lastindex }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === chat._id;





  const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(chat._id);


  const handleConversation = ()=>{
 
	setSelectedConversation(chat)

  }
 

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-red-500 rounded p-2 py-1 cursor-pointer ${
          isSelected ? "bg-red-500" : ""
        }`}
		onClick={handleConversation}
      >
        <div className={`avatar ${isOnline?"online":""}`}>
          <div className="w-12 rounded-full">
            <img   src={chat.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{chat.fullName}</p>
          </div>
        </div>
      </div>

      {!lastindex && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
