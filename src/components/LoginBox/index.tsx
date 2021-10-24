import { useContext } from 'react'
import { VscGithubInverted } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth'

export function LoginBox() {
   const { signInUrl } = useContext(AuthContext)

   return (
      <>
      <div className="hidden h-screen w-full bg-banner-girl bg-no-repeat bg-top pt-[440px] px-20 pb-0 text-center lg:flex flex-col justify-center items-center">
         <strong className="text-[32px] leading-9">Entre e compartilhe sua mensagem</strong>
         <a href={signInUrl} className="bg-[#ffcd1e] mt-8 py-0 px-10 h-14 text-[#09090a] text-sm font-bold uppercase no-underline flex justify-center items-center filter hover:brightness-90">
            <VscGithubInverted size="24" className="mr-4" />
            Entrar com Github
         </a>
      </div>
      <div className="lg:hidden grid items-end mb-8">
         <a href={signInUrl} className="bg-[#ffcd1e] mt-8 py-0 px-10 h-14 text-[#09090a] text-sm font-bold uppercase no-underline flex justify-center items-center filter hover:brightness-90">
            <VscGithubInverted size="24" className="mr-4" />
            Entrar com Github
         </a>
      </div>
      </>
   )
}