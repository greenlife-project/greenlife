"use client";
import Image from "next/image";
import {Button, Input, Logo, MenuLink} from "@garden/ui";

export default function Page(){
    return (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-custom-white rounded-[32px]">
            <div className="flex justify-center pt-[26px]">
                <Image src={Logo} alt={"Logo"}/>
            </div>
            <div className="space-y-4 md:space-y-6">
                <Input
                    placeholder="Номер телефона"
                    value={""}
                    onChange={(e) => {}}
                />
                <Input
                    placeholder="Пароль"
                    value={""}
                    onChange={(e) => {}}
                />
                <div className="w-full">
                    <Button
                        label="Войти"
                    />
                    <MenuLink label={"Нету аккаунт? Зарегестрируйтесь"} href={"/auth/register"}/>
                </div>
            </div>
        </div>
    )
}
