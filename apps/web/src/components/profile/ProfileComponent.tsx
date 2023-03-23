"use client";
import {Button, Input} from "@garden/ui";
import {useState} from "react";
import {api} from "@/utils/api";

//@ts-ignore
export default function ProfileComponent({first_name, last_name}){

    //@ts-ignore
    const [firstName, setFirstName] = useState(first_name);
    //@ts-ignore
    const [lastName, setLastName] = useState(last_name);

    return(
        <>
            <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder={"Введите Фамилию"}/>
            <Input value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder={"Введите Имя"}/>
            <div className="mt-2">
                <Button label={"Сохранить"}/>
            </div>
        </>

    )
}
