import {Button} from "../button/Button";
import Link from "next/link";

interface TopicProps{
    id: string
    name: string
    type: string
}

export function Topic({id, name, type}:TopicProps){
    return(
        <Link href={`/community/${id}`}>
        <nav className="bg-custom-white px-2 sm:px-4 py-2.5 rounded-xl mt-2">
            <div className="container flex flex-wrap items-center justify-between mx-auto ">
                <div>
                    <h1 className={"text-xl p-2.5"}>
                        {name}
                    </h1>
                    <Button label={type} type={"light"}/>
                </div>
                <div className="w-full md:block md:w-auto">
                    <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li className={"mr-12"}>
                            <h2
                                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-custom-gray"
                                aria-current="page">18</h2>
                        </li>
                        <li className={"mr-12"}>
                            <h2
                                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-custom-gray"
                                aria-current="page">100</h2>
                        </li>
                        <li>
                            <h2
                                className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0 text-custom-gray"
                                aria-current="page">10 Сентября</h2>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </Link>
    )
}
