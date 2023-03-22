"use client";
import Image from "next/image";
import {Button, Input, Logo, MenuLink} from "@garden/ui";
import {useState} from "react";

export default function Page(){
    const [phone, setPhone] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [checkData, setCheckData] = useState(false);
    const [checkTerms, setCheckTerms] = useState(false);

    const onSubmit = async() => {

    }

    return(
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-custom-white rounded-[32px]">
            <div className="flex justify-center pt-[26px]">
                <Image src={Logo} alt={"Logo"}/>
            </div>
            <div className="space-y-4 md:space-y-6">
                <Input
                    placeholder="Номер телефона"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <div className="flex gap-x-2">
                    <Input
                        placeholder="Имя"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                        <Input
                            placeholder="Фамилия"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                </div>
                <Input
                    type="password"
                    placeholder="Придумайте пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="w-full">
                    <Button
                        label="Войти"
                    />
                    <MenuLink label={"Есть аккаунт? Войти"} href={"/auth/register"}/>
                </div>
            </div>
            <div>
                <input checked id="checked-data" type="checkbox" value={checkData? "checked" : ""}
                       onChange={event => setCheckData(event.target.checked)}
                       className="w-4 h-4 border-custom-gray rounded"/>
                    <label htmlFor="checked-data"
                           className="ml-2 text-sm font-medium text-custom-gray">Согласен на обработку персональных данных</label>
            </div>
            <div>
                <input checked id="checked-terms" type="checkbox" value={checkTerms ? "checked" : ""}
                       onChange={event => setCheckTerms(event.target.checked)}
                       className="w-4 h-4 border-custom-gray rounded"/>
                <label htmlFor="checked-terms"
                       className="ml-2 text-sm font-medium text-custom-gray">Согласен с условиями пользовательского соглашения</label>
            </div>
        </div>
    )
}
