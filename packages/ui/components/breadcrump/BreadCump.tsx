import Link from "next/link";

interface BreadCumpProps {
    links: LinkType[]
}

interface LinkType{
    label: string
    href: string
}

export function BreadCump({links}: BreadCumpProps){
    return(
        <div>
            <nav className="flex justify-between">
                <ol className="inline-flex items-center mb-3 sm:mb-0">
                    {links.map((link, index) => {
                        if(index === links.length-1){
                            return (
                                <li aria-current="page" key={index}>
                                    <div className="flex items-center">
                                        <Link href={link.href} className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-main rounded-lg">
                                            {link.label}
                                        </Link>
                                    </div>
                                </li>
                            )
                        }else{
                            return(
                                <>
                                    <li key={index}>
                                        <div className="flex items-center">
                                            <Link href={link.href} className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-custom-grey rounded-lg">
                                                {link.label}
                                            </Link>
                                        </div>
                                    </li>
                                    <span className="mx-1 text-custom-grey">/</span>
                                </>
                            )
                        }
                    })}
                </ol>
            </nav>
        </div>
    )
}
