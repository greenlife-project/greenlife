import {Button} from "../button/Button";
import Link from "next/link";

interface MyGuideCardProps {
    title: string
    id:    string
    img:   string
    name:  string
}

export function MyGuideCard({title, id, img}: MyGuideCardProps){
    return(

        <div
            className="w-full max-w-sm bg-custom-white rounded-lg shadow">
            <a href="#">
                <img className="p-8 rounded-t-lg" src={img} />
            </a>
            <div className="px-5 pb-5">
                <span className="text-xl text-custom-black">{title}</span>

                <div className="flex mt-4">
                    <Link href={`/guide/${id}`}><Button label="Читать"/></Link>
                    <Link href={"#"}> <Button label={"Редактировать"}  type="light"/></Link>
                </div>
            </div>
        </div>

    )
}
