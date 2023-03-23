import {Button} from "../button/Button";
import Link from "next/link";

interface GuideCardProps {
    title: string
    id:    string
    img:   string
}

export function GuideCard({title, id, img}: GuideCardProps){
    return(

        <div
            className="w-full max-w-sm bg-custom-white rounded-lg shadow">
            <a href="#">
                <img className="p-8 rounded-t-lg" src={img} />
            </a>
            <div className="px-5 pb-5">
                <span className="text-xl text-custom-black">{title}</span>
                <div className="flex flex-col mt-4">

                    <Link href={`/guide/${id}`} className="w-full text-sm px-5 py-2.5 mr-2 mb-2  text-center font-medium rounded-lg focus:outline-none text-custom-white bg-main hover:text-custom-green">Руководства</Link>
                    <Link href={"/shop"} className="w-full text-sm px-5 py-2.5 mr-2 mb-2  text-center font-medium rounded-lg focus:outline-none text-main bg-custom-green"> <Button label={"Где купить"}  type="light"/></Link>
                </div>
            </div>
        </div>

    )
}
