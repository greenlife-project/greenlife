"use client";

import {Button} from "@garden/ui";
import {useState} from "react";
import { api } from "@/utils/api";
import {toast} from "react-toastify";
import { useRouter } from 'next/navigation';

export default function VerifyTokenComponent(){
    const {push} = useRouter();
    const [token, setToken] = useState(Array.from(""))


    const verify = api.auth.verifyToken.useMutation();
    if(verify.isLoading){

    }

    if(!verify.isLoading && verify.data){
        if(verify.data?.reason === "false"){
            toast.error("Вы ввели не правильный код", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }else if(verify.data?.reason === "expire"){
            toast.error("Время действия код вышло", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }else {
            toast.success("Вы успешно привязали номер", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            push("/auth/login")
        }
    }

    return(
        <>
            <div className="flex flex-row justify-center text-center px-2 mt-5">
                <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text"
                       maxLength={1}
                       onChange={(e) => {
                           const token1 = token
                           token1[0] = e.target.value
                           setToken(token1)
                       }}
                />
                <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text"
                       maxLength={1}
                       onChange={(e) => {
                           const token1 = token
                           token1[1] = e.target.value
                           setToken(token1)
                       }}
                />
                <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text"
                       maxLength={1}
                       onChange={(e) => {
                           const token1 = token
                           token1[2] = e.target.value
                           setToken(token1)
                       }}
                />
                <input className="m-2 border h-10 w-10 text-center form-control rounded" type="text"
                       maxLength={1}
                       onChange={(e) => {
                           const token1 = token
                           token1[3] = e.target.value
                           setToken(token1)
                       }}
                />
            </div>
            <div className="flex justify-center text-center mt-5">
                <Button type="empty" label={"Подтвердить"} onClick={() => {
                    verify.mutate(token.join(""));
                }}/>
            </div>
        </>
    )
}
