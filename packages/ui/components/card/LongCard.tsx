'use client'
import {Button} from "../button/Button";
import {errorToast} from "web/src/utils/utils";
import {useState} from "react";

interface LongCardProps {
    name: string
    title: string
    description: string
}

export function LongCard({ name, title, description} : LongCardProps){
    return(
        <div className="max-w-sm w-full lg:max-w-full lg:flex bg-custom-white rounded-lg">
            <div
                className=" rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                    <p className="text-2xl text-custom-black flex items-center">
                        {title}
                    </p>
                    <div className="text-custom-gray font-bold text-sm mb-2">{name}</div>
                    <p className="text-gray-700 text-base">{description}</p>
                </div>
            </div>
        </div>
    )
}
