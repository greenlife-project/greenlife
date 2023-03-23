"use client"

import {api} from "@/utils/api";
import {Button} from "@garden/ui";

export default function Page(){
    const guides = api.guide.getMyGuide.useQuery();
    if(guides.isLoading){
        return "Loading..."
    }
    return(
        <>
            <div className="float-right">
                <Button label={"Разместить статью"}/>
            </div>
            <div>
                <h1 className="text-custom-black font-bold text-xl">Статьи</h1>
                <div className="py-2 px-4 sm:py-4 sm:px-6 ">
                    {guides.data.length === 0 ? "Тут пока пусто" : ""}
                </div>
            </div>

        </>

    )
}
