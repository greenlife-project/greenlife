'use client'
import Link from "next/link";
import {Button} from "../button/Button";
import {Burger, Chat, Logo} from "../../index";
import {MenuLinkDropDown} from "../menulink/MenuLinkDropDown";
import {MenuLink} from "../menulink/MenuLink";
import {useState} from "react";
import Image from "next/image";

interface HeaderProps {
    //Передается сделан ли вход по дефолту не вошел
    isLogin?: boolean
}


export function Header({isLogin = false}: HeaderProps){
    const [open, setOpen] = useState(false);
    return(
        <header>
            <nav className="bg-custom-white px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link href="/" className="flex items-center">
                            <img src={Logo.src} alt="logo" className="mr-3 h-6 sm:h-9"/>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <div className="hidden md:flex">
                            {isLogin ? <>
                                    <Link href="/profile"><Button label={"Личный кабинет"}/></Link>

                                </> :
                                <>
                                    <Link href="/auth/login"><Button type="empty" label={"Войти"}/></Link>
                                    <Link href="/auth/register"><Button label={"Регистрация"}/></Link>
                                </>}
                        </div>
                        <button type="button"
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100"
                                aria-controls="mobile-menu-2" aria-expanded="false" onClick={() => setOpen(!open)}>
                            <img src={Burger.src} alt={""}/>
                            <span className="sr-only">Открыть меню</span>
                        </button>
                    </div>
                    <div className={["hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"].join(' ')}>
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <MenuLinkDropDown label="Справочник" href="/guide" links={Array.of({label: "test", link:"test"})}/>
                            <li className="flex">
                                <img src={Chat.src} alt={"Chat"} className="mr-2"/>
                                <MenuLink label={"Сообщество"} href={"/community"}/>
                            </li>
                            <li className="flex">
                                <MenuLink label={"Интернет-магазин"} href={"/shop"}/>
                            </li>
                            {/*<li className="flex">*/}
                            {/*    <MenuLink label={"Блог"} href={"#"}/>*/}
                            {/*</li>*/}
                        </ul>
                    </div>

                </div>
            </nav>
            <div className={["absolute w-full bg-custom-white z-50", open ? "" : "hidden"].join(' ') }>
                <div className="flex justify-center">
                    <ul className="">
                        <MenuLinkDropDown label="Справочник" href="/guide" links={Array.of({label: "test", link:"test"})}/>
                        <li className="flex">
                            <MenuLink label={"Сообщество"} href={"/community"}/>
                        </li>
                        <li className="flex">
                            <MenuLink label={"Интернет-магазин"} href={"/shop"}/>
                        </li>
                        {isLogin ? <>
                                <Link href="/profile"><Button label={"Личный кабинет"}/></Link>

                            </> :
                            <>
                                <Link href="/auth/login"><Button type="empty" label={"Войти"}/></Link>
                                <Link href="/auth/register"><Button label={"Регистрация"}/></Link>
                            </>}
                        {/*<li className="flex">*/}
                        {/*    <MenuLink label={"Блог"} href={"#"}/>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        </header>
    )
}
