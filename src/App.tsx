import { useContext } from "react";
import { LoginBox } from "./components/LoginBox";
import { MessageList } from "./components/MessageList";
import { SendMessageForm } from "./components/SendMessageForm";
import { AuthContext } from "./contexts/auth";

export function App() {

  const { user } = useContext(AuthContext)

  return (
    <div className={`${!!user ? 'lg:before:h-screen before:w-[420px] before:bg-side-banner before:bg-no-repeat before:bg-cover before:absolute flex justify-end' : ''} `}>
      <main className={`contentWrapper`}>
        <MessageList />
        {!!user ? <SendMessageForm /> : <LoginBox />}
      </main>
    </div>
  )
}