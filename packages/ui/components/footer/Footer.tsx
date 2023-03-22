import {Logo, Mail, MenuLink, Phone} from "../../index";
import Link from "next/link";

export function Footer(){
    return(
        <footer className="bg-custom-white">
            <div className="mx-auto w-full p-4 sm:p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    <div className="mb-6 md:mb-0">
                        <Link href="/" className="flex items-center">
                            <img src={Logo.src} className="h-8 mr-3"
                                 alt="Logo"/>
                        </Link>
                    </div>
                    <div className="md:flex [&>*]:mr-4">
                            <MenuLink label={"Онлайн-Магазин"} href={"/"}/>
                            <MenuLink label={"О нас"} href={"/"}/>
                            <MenuLink label={"Контакты"} href={"/"}/>
                            <MenuLink label={"Сообщество"} href={"/"}/>
                     </div>
                    <div className="md:flex">
                        <div className="flex items-center mr-2">
                            <img src={Mail.src}/>
                            <MenuLink label={"info@green-life.site"} href={"/"}/>
                        </div>
                        <div className="flex items-center">
                            <img src={Phone.src}/>
                            <MenuLink label={"+7 (914) 300-61-62"} href={"/"}/>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
          <span className="text-sm text-custom-gray sm:text-center mt-8">Все права защищены. <Link href="/"
                                                                                              className="hover:underline">© 2023 GreenLife</Link>
          </span>
                </div>
            </div>
        </footer>
    )
}
