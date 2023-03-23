"use client";
import {Button, Input, Logo, MenuLink, TextArea} from "@garden/ui";
import {stepsState} from "@/states/guide";

export default function Page(){

    return(
        <div className="flex flex-col items-center justify-center py-4">
            <h1>Успешно</h1>
            <span>Ваша статья на рассмотрении</span>
            <MenuLink href={"/"} label={"Перейти на главную"}/>
        </div>
    )
}
