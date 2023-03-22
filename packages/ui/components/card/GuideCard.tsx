import {Button} from "../button/Button";

export function GuideCard(){
    return(

        <div
            className="w-full max-w-sm bg-custom-white rounded-lg shadow">
            <a href="#">
                <img className="p-8 rounded-t-lg" src="https://storage.yandexcloud.net/greenlife/Rectangle%201368.png" />
            </a>
            <div className="px-5 pb-5">
                <span className="text-xl text-custom-black">Малина садовая</span>
                <div>
                    <span className="text-base text-custom-gray">10 статей</span>
                </div>

                <div className="flex flex-col mt-4">
                    <Button label="Руководства" type="light"/>
                    <Button label={"Где купить"}/>
                </div>
            </div>
        </div>

    )
}
