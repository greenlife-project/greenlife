import './globals.css'
import ToastComponent from "@/components/Toast/ToastComponent";
import {TRPCProvider} from "@/providers/trpcProvider";
import {Header} from "@garden/ui";

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
       <Header/>
       {children}
     </TRPCProvider>
    </body>
    </html>
  )
}
