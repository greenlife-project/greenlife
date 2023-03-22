"use client";
import Link from "next/link";
import {ArrowDown} from "../../index";
import {useState} from "react";

interface MenuLinkDropDown {
    //Список ссылок
    links: LinkType[]
    label: string
    href: string
}

interface LinkType{
    label: string
    link: string
}

export function MenuLinkDropDown({links, href, label}: MenuLinkDropDown){
    const [open, setOpen] = useState(false);

    return(
        <li className="flex relative">
            <Link href={href}
                  className="block py-2 pr-4 pl-3 hover:text-main text-black lg:hover:bg-transparent lg:border-0 lg:p-0">{label}</Link>
            <img src={ArrowDown.src} alt={"Arrow"} className="ml-2" onClick={() => {setOpen(!open)}}/>
            <div className={["absolute right-0 z-10 w-56 mt-8 origin-top-right bg-custom-white rounded-md", !open ? "hidden" : ""].join(' ')}>
                <div className="p-2">
                    {links.map((link, index) => (
                        <Link key={index}
                            href={link.link}
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </li>
    )
}
