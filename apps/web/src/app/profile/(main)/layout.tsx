"use client";
import {BreadCump} from "@garden/ui";
import Link from "next/link";
import {signOut} from "next-auth/react";
import ProfileComponent from "@/components/profile/ProfileComponent";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return(
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <BreadCump links={Array.of({label: "Главная", href: "/"}, {label: "Личный кабинет", href: "/profile"})}/>
            <section className="pt-6">
                <div className="grid md:grid-cols-12 gap-5 p-4 m-2">
                    <div className="bg-custom-white px-10 py-4 rounded-xl md:col-span-3 md:pt-0">
                        <ul role="list"
                            className="space-y-4 py-6 text-sm font-medium text-gray-900">
                            <li className="flex">
                                <Link href="/profile" className="font-medium text-lg hover:text-main">Профиль</Link>
                            </li>
                            <li className="flex">
                                <Link href="/profile/guides" className="font-medium text-lg hover:text-main">Мои статьи</Link>
                            </li>
                            <li className="flex">
                                <Link href="/profile/items" className="font-medium text-lg hover:text-main">Мои товары</Link>
                            </li>
                            <li className="flex">
                                <Link href="/profile/feedback" className="font-medium text-lg hover:text-main">Мои обсуждения</Link>
                            </li>
                            <li className="flex">
                                <Link href="/profile/settings" className="font-medium text-lg hover:text-main">Настройки</Link>
                            </li>
                            <li className="flex">
                                <div  className="font-medium text-lg hover:text-main" onClick={async() => {await signOut()}}>Выйти</div>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:px-8 md:col-span-9">
                        {children}

                    </div>
                </div>
            </section>
        </main>
    )
}
