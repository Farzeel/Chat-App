import { useEffect, useState } from "react"
import { toast } from "react-hot-toast"

const useGetConversation = ()=>{

    const [chats , setChats] = useState([])
    const [loading , setLoading] = useState(false)

    useEffect(() => {
        const getConverstion = async()=>{

            setLoading(true)
           try {
             const res  = await fetch("/api/user")
             const data = await res.json()
     
             if(data.error){
                 throw new Error(data.error)
             }
             setChats(data)
           } catch (error) {
            toast.error(error.message)
           }finally{
            setLoading(false)
           }
    
        }
        getConverstion()
    }, []);

    return {loading , chats}

   
}

export default useGetConversation