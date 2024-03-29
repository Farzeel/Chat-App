import React, { useEffect, useRef } from 'react'
import useGetMessages from '../../hooks/useGetMessages'
import Message from './Message'
import MessageSkeleton from '../../skeleton/MessageSkeleton'
import useListenMessages from '../../hooks/useListenMessages'



const Messages = () => {

	const {loading , messages} = useGetMessages()
	useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
	

  return (
    <div className='px-4 flex-1 overflow-auto'>

		{loading ? [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />):messages.map(message=>(
          <div key={message._id} ref={lastMessageRef}>
		<Message   message={message} />
	  </div>
     			
		))}
		{!loading && messages.length === 0 && (
				<p className='text-center text-slate-200'>Send a message to start the conversation</p>
			)}
		
     		</div>
  )
}

export default Messages
