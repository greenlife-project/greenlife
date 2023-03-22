import Link from "next/link";

interface MenuLink {
    label: string
    href: string
}


export function MenuLink({label ,href}: MenuLink){
    return(
        <Link href={href}
                  className="block py-2 pr-4 pl-3 text-black hover:text-main lg:hover:bg-transparent lg:border-0 lg:p-0">{label}</Link>
    )
}
