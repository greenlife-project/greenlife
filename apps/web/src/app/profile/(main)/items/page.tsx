"use client"

import {api} from "@/utils/api";
import Link from "next/link";
import GuidesComponent from "@/components/profile/guides/GuidesComponent";
import ItemsComponent from "@/components/profile/items/ItemsComponent";

export default function Items(){
    const items = api.item.getMyItems.useQuery();
    if(items.isLoading){
        return "Loading..."
    }
    return(
        <>
            <div className="float-right">
                <Link href={"/profile/additems"} className="text-sm px-5 py-2.5 mr-2 mb-2 font-medium rounded-lg focus:outline-none text-custom-white bg-main hover:text-custom-green">Разместить товар</Link>
            </div>
            <div>

                <h1 className="text-custom-black font-bold text-xl">Товары</h1>
                <div className="py-2 px-4 sm:py-4 sm:px-6 ">
                    {items.data && items.data.length === 0 ? "Тут пока пусто" : <ItemsComponent items={items}/>}
                </div>
            </div>

        </>

    )
}
