import './globals.css'
import ToastComponent from "@/components/Toast/ToastComponent";
import {TRPCProvider} from "@/providers/trpcProvider";

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
    <body>
     <TRPCProvider>
       <ToastComponent/>
       {children}
     </TRPCProvider>
    </body>
    </html>
  )
}
