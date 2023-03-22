"use client";
import Image from "next/image";
import {Button, Input, Logo, MenuLink} from "@garden/ui";
import {signIn} from "next-auth/react";
import {useState} from "react";
import {toast} from "react-toastify";
import {errorToast} from "@/utils/utils";
import {useRouter} from "next/navigation";

export default function Page(){
    const {push} = useRouter()
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async () => {
        const data = await signIn("credentials", {phone: phone, password: password, redirect: false})
        if(!data){
            errorToast('Не удалось подключиться к серверу')
            return;
        }
        if(data.error){
            errorToast(data.error)
            return
        }
        push("/")
    }
    return (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-custom-white rounded-[32px]">
            <div className="flex justify-center pt-[26px]">
                <Image src={Logo} alt={"Logo"}/>
            </div>
            <div className="space-y-4 md:space-y-6">
                <Input
                    placeholder="Номер телефона"
                    value={phone}
                    onChange={(e) => {setPhone(e.target.value)}}
                />
                <Input
                    placeholder="Пароль"
                    type={"password"}
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                />
                <div className="w-full">
                    <Button
                        label="Войти"
                        onClick={() => onSubmit()}
                    />
                    <MenuLink label={"Нету аккаунт? Зарегестрируйтесь"} href={"/auth/register"}/>
                </div>
            </div>
        </div>
    )
}
