'use client'
import {Button} from "../button/Button";
import {useState} from "react";
import {errorToast} from "web/src/utils/utils";

export function CardShop(){
    const [count, setCount] = useState(1);
    return(

        <div
            className="w-full max-w-sm bg-custom-white rounded-lg shadow">
            <a href="#">
                <img className="p-8 rounded-t-lg" src="https://storage.yandexcloud.net/greenlife/Rectangle%201368.png" />
            </a>
            <div className="px-5 pb-5">
                <span className="text-xl text-custom-black">Малина садовая</span>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex flex-col">
                        <span className="text-custom-gray">Цена за саженец</span>
                        <span className="text-main text-2xl font-semibold">390 Р</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-custom-gray float-right">Фасовка</span>
                        <span className="text-custom-идфсл text-xl">1 Сажанец</span>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <Button label="Купить"/>
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

    )
}
