import './globals.css'
import ToastComponent from "@/components/Toast/ToastComponent";
import {TRPCProvider} from "@/providers/trpcProvider";
import {RecoilProvider} from "@/providers/recoilProvider";
import HeaderComponent from "@/components/header/HeaderComponent";
import {Footer} from "@garden/ui"
import {RecoilRoot} from "recoil";

export const metadata = {
  title: 'GreenLife',
  description: 'Сообщество огородников',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
    <body className="bg-bg">
     <TRPCProvider>
       <ToastComponent/>
       <HeaderComponent/>
       <RecoilProvider>
         {children}
       </RecoilProvider>
       <Footer/>
     </TRPCProvider>
    </body>
    </html>
  )
}
