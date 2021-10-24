import { FormEvent, useContext, useState } from "react";
import { VscGithubInverted, VscSignOut } from "react-icons/vsc";
import { AuthContext } from "../../contexts/auth";
import { api } from "../../services/api";

export function SendMessageForm() {
   const { user, signOut } = useContext(AuthContext)
   const [message, setMessage] = useState('')

   async function handleSendMessage(event: FormEvent) {

      event.preventDefault();

      if(!message.trim()) {
         return;
      }

      await api.post('messages', { message })

      setMessage('')
   }

   return (
      <div className="bg-[#1b1b1f] p-6 self-center flex flex-col items-center text-center relative">
         <button onClick={signOut} className="hidden lg:block bg-transparent border-0 text-[#c4c4cc] absolute left-6 top-6 cursor-pointer filter hover:brightness-90">
            <VscSignOut size="32" />
         </button>

         <header className="hidden lg:flex flex-col items-center">
            <div className="p-[3px] bg-gradient-to-br from-[#ff008e] to-[#ffcd1e] rounded-full">
               <img src={user?.avatar_url} alt={user?.name} className="w-[94px] h-[94px] rounded-full border-4 border-[#121214]" />
            </div>
            <strong className="text-2xl leading-[30px] mt-4"></strong>
            <span className="flex items-center mt-2 text-[#c4c4cc]">
               <VscGithubInverted size="16" className="mr-2" />
               {user?.login}
            </span>
         </header>

         <form onSubmit={handleSendMessage} className="flex flex-col self-stretch lg:mt-12 bg-[#202024]">
            <label htmlFor="message" className="py-[18px] px-6 text-xl bg-[#29292e] font-bold text-left">Mensagem</label>
            <textarea
               name=""
               id=""
               className="bg-transparent border-0 p-6 resize-none h-40 text-[#e1e1e6] text-base leading-6 focus:outline-none placeholder-[#8d8d99]"
               placeholder="Qual sua expectativa para o evento?"
               onChange={event => setMessage(event.target.value)}
               value={message}
            />

            <button type="submit" className="self-end border-0 bg-[#ff008e] m-6 py-0 px-8 h-10 text-white text-sm font-bold uppercase no-underline flex justify-center items-center filter hover:brightness-90 cursor-pointer">Enviar mensagem</button>
         </form>
      </div>
   )
}