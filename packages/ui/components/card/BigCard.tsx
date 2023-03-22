'use client'
import {Button} from "../button/Button";
import {errorToast} from "web/src/utils/utils";
import {useState} from "react";

export function BigCard(){
    const [count, setCount] = useState(1);
    return(
        <div className="max-w-sm w-full lg:max-w-full lg:flex bg-custom-white rounded-lg">
            <img
            className={"h-48 lg:h-auto lg:w-96 w-full flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"}
            src={"https://storage.yandexcloud.net/greenlife/Rectangle%201368.png"}/>
            <div
                className=" rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-2xl text-custom-black flex items-center">
                        Малина садовая
                    </p>
                    <div className="text-custom-gray font-bold text-sm mb-2">Наталья Ныткина</div>
                    <p className="text-gray-700 text-base">Земляника - это свежий и ароматный сезонный фрукт с множеством полезных свойств для здоровья. Наши земляники выращены на экологически чистых полях, без использования химических удобрений и пестицидов, что гарантирует высокое качество и вкус фрукта.</p>
                </div>
                <div className="flex items-center">
                        <div className="text-sm">
                            <div className="flex">
                                <div className="mr-2">
                                    <p className="text-gray-900 leading-none">Цена за саженец</p>
                                    <span>390 Р</span>
                                </div>
                                <div>
                                    <p className="text-gray-900 leading-none">Фасановка</p>
                                    <span>1 Саженец</span>
                                </div>
                            </div>
                            <div className="flex mt-4">
                                <Button label={"Добавить в корзину"}/>
                                <div>
                                    <button className="text-sm px-5 py-2.5 bg-custom-stroke font-medium rounded-lg mr-1" onClick={() => {
                                        if(count-1<=0){
                                            errorToast("Такое количество нельзя поставить")
                                            return
                                        }
                                        setCount(count-1)
                                    }}>-</button>
                                    <button className="text-sm px-5 py-2.5 bg-custom-green font-medium rounded-lg mr-1">{count}</button>
                                    <button className="text-sm px-5 py-2.5 bg-custom-stroke font-medium rounded-lg" onClick={() => setCount(count+1)}>+</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}
