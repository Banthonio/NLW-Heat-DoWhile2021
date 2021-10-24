import { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client'
import { api } from '../../services/api'

import logoImg from '../../assets/logo.svg';
import { AuthContext } from '../../contexts/auth';

type Message = {
   id: string;
   text: string;
   created_at: string;
   user: {
      name: string;
      avatar_url: string;
   }
}

const messagesQueue: Message[] = []

const socket = io('http://localhost:4000')

socket.on('new_message', (newMessage: Message) => {
   messagesQueue.push(newMessage);
})

export function MessageList() {
   const { user, signOut } = useContext(AuthContext)
   const [messages, setMessages] = useState<Message[]>([])

   useEffect(() => {
      setInterval(() => {
         if (messagesQueue.length > 0) {
            setMessages(prevState => [
               messagesQueue[0],
               prevState[0],
               prevState[1],
            ].filter(Boolean))

            messagesQueue.shift()
         }
      }, 3000)
   }, [])

   useEffect(() => {
      api.get<Message[]>('messages/last3').then(response => {
         setMessages(response.data)
      })
   }, [])

   return (
      <div className="flex flex-col justify-between items-start w-full">
         <div className="flex flex-row justify-between items-center w-full my-6 mx-0">
            <img src={logoImg} alt="DoWhile 2021" className="h-5 lg:h-7" />
            <div className="flex lg:hidden items-center">
               <a onClick={signOut} className="text-base mr-3 cursor-pointer hover:brightness-90">Sair</a>
               <div className="userImage">
                  <img src="http://github.com/banthonio.png" alt="Bráulio António" className="w-[35px] h-[35px] rounded-full border-4 border-[#121214]" />
               </div>
            </div>
         </div>

         <ul className="list-none flex flex-col justify-center gap-10 flex-1">
            {
               messages.map(message => {
                  // console.log(message.created_at+message.user.name)
                  return (
                     <li key={message.created_at + message.user.name} className="message">
                        <p className="messageContent">{message.text}</p>
                        <div className="messageUser">
                           <div className="userImage">
                              <img src={message.user.avatar_url} alt={message.user.name} className="user-img" />
                           </div>
                           <span className="userName">{message.user.name}</span>
                        </div>
                     </li>
                  )
               })
            }
         </ul>
      </div>
   )
}