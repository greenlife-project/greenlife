import './globals.css'
import ToastComponent from "@/components/Toast/ToastComponent";
import {TRPCProvider} from "@/providers/trpcProvider";
import HeaderComponent from "@/components/header/HeaderComponent";

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
       {children}
       <Footer/>
     </TRPCProvider>
    </body>
    </html>
  )
}
