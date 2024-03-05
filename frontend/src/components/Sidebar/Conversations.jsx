import React from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../hooks/useGetConversation'

const Conversations = () => {

	const {loading , chats} = useGetConversation()

  return (
	<div className='py-2 flex flex-col overflow-auto'>
              {loading? <span className='loading loading-spinner mx-auto'></span>:
			  chats.map((chat, index)=>(
                <Conversation key={chat._id} chat={chat} lastindex={index == chats.length-1}/>
			  ))
			  }
 			
 			
 		</div>

  )
}

export default Conversations
