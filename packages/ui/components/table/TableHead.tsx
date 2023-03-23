export function TableHead(){
    return(
        <nav className="hidden md:block bg-custom-white px-2 sm:px-4 py-2.5 rounded-xl mt-2">
            <div className="container flex flex-wrap items-center justify-between mx-auto ">
                <div>
                    <h1>
                        Тема
                    </h1>
                </div>
                <div className="w-full md:block md:w-auto">
                    <ul className="flex flex-col p-4 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                        <li>
                            <h2
                               className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 text-custom-gray"
                               aria-current="page">Комментарии</h2>
                        </li>
                        <li>
                            <h2
                                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 text-custom-gray"
                                aria-current="page">Просмотры</h2>
                        </li>
                        <li>
                            <h2
                                className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 text-custom-gray"
                                aria-current="page">Активность</h2>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
