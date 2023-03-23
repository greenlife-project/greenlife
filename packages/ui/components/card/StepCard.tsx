import {Button} from "../button/Button";
import {errorToast} from "web/src/utils/utils";

interface StepCardProps {
    img: string
    title: string
    description: string
}

export function StepCard({img, title, description}: StepCardProps){
    return(
        <div className="max-w-sm w-full lg:max-w-full lg:flex bg-custom-white rounded-lg">
            <img
                className={"h-48 p-4 lg:h-auto lg:w-56 w-full flex-none bg-cover rounded-lg text-center overflow-hidden"}
                src={img}/>
            <div
                className=" rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-2xl text-custom-black flex items-center">
                        {title}
                    </p>
                    <p className="text-custom-black text-base">{description}</p>
                </div>
            </div>
        </div>
    )
}
