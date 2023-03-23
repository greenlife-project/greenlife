"use client"

import {api} from "@/utils/api";
import {Button} from "@garden/ui";
import Link from "next/link";

export default function Page(){
    const guides = api.guide.getMyGuide.useQuery();
    if(guides.isLoading){
        return "Loading..."
    }
    return(
        <>
            <div className="float-right">
                <Link href={"/profile/addguide"} className="text-sm px-5 py-2.5 mr-2 mb-2 font-medium rounded-lg focus:outline-none text-custom-white bg-main hover:text-custom-green">Разместить статью</Link>
            </div>
            <div>
                <h1 className="text-custom-black font-bold text-xl">Статьи</h1>
                <div className="py-2 px-4 sm:py-4 sm:px-6 ">
                    {guides.data && guides.data.length === 0 ? "Тут пока пусто" : ""}
                </div>
            </div>

        </>

    )
}
