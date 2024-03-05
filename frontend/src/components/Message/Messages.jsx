import React from 'react'
import useGetMessages from '../../hooks/useGetMessages'
import Message from './Message'



const Messages = () => {

	const {loading , messages} = useGetMessages()
	

  return (
    <div className='px-4 flex-1 overflow-auto'>

		{messages.map(message=>(

     			<Message message={message} />
		))}
		
     		</div>
  )
}

export default Messages
