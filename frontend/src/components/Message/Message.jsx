import React from 'react'

import {useAuthContext} from "../../context/authContext"
import useConversation from '../../zustand/useConversion';

const Message = ({message}) => {
  const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();

  const fromMe = message.senderId === authUser._id
  const profilePic = fromMe?authUser.profilePic:selectedConversation?.profilePic
  return (
    <div className={`chat chat-end`}>
    <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
            <img alt='Tailwind CSS chat bubble component' src={profilePic} />
        </div>
    </div>
    <div className={`chat-bubble text-white bg-blue-500 pb-2`}>{message.message} </div>
    <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:15</div>
</div>
  )
}

export default Message
