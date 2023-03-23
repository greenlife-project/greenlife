'use client'
import {Button} from "../button/Button";
import {useState} from "react";
import {errorToast} from "web/src/utils/utils";
import Link from "next/link";

interface CardShopProps{
    id: string
    title: string
    imgURL: string
    price: string
}

export function MyCardShop({id, title, imgURL, price}: CardShopProps){
    return(
        <div
            className="w-full max-w-sm bg-custom-white rounded-lg shadow">
            <Link href={`/shop/${id}`}>
                <img className="p-8 rounded-t-lg" src={imgURL} />
            </Link>
            <div className="px-5 pb-5">
                <span className="text-xl text-custom-black">{title}</span>
                <div className="flex items-center justify-between mt-2">
                    <div className="flex flex-col">
                        <span className="text-custom-gray">Цена за саженец</span>
                        <span className="text-main text-2xl font-semibold">{price} Р</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-custom-gray float-right">Фасовка</span>
                        <span className="text-custom-идфсл text-xl">1 Сажанец</span>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <Button label="Сделать деактивным"/>
                    <Button label="Изменить" type={"light"}/>
                </div>
            </div>
        </div>

    )
}



