import Link from "next/link";
import {Chat} from "../../index";

interface CommunityCardProps {
    img: string
    label: string
    view: number
}

export function CommunityCard({img, label, view}: CommunityCardProps){
    return(
        <div>
            <div className="flex flex-col items-center">
                <Link href={"/"}
                      className="p-6">
                    <img src="https://storage.yandexcloud.net/greenlife/Rectangle%201368(2).png" className="w-32 h-32"/>
                </Link>
                <h1 className="text-custom-black text-2xl font-semibold">
                    {label}
                </h1>
                <div className="text-custom-gray text-base flex [&>*]:mr-2">            <img src={Chat.src}/>
                    {view}
                </div>
            </div>
        </div>

    )
}
