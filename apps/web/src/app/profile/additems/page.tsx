"use client";
import {Button, Input, Logo, MenuLink, TextArea} from "@garden/ui";
import {useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {stepsState} from "@/states/guide";
import {errorToast} from "@/utils/utils";
import {api} from "@/utils/api";



export default function AddGuide(){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [link, setLink] = useState("");

    const onSubmit = async() => {
        const res = await fetch(`/api/items/additems`,
            {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    description,
                    price: price,
                    link
                })
            }
        )
        const json = await res.json();
        if(res.status != 200){
            errorToast(json.message)
            return
        }
    }

    return(
        <div className="flex flex-col items-center justify-center py-4">
            <h1 className="text-3xl">
                Добавить товар
            </h1>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-custom-white rounded-[32px] w-full md:max-w-xl">
                <div className="flex justify-center">
                    <h1 className="text-2xl">
                        Описание
                    </h1>
                </div>
                <div className="space-y-4 md:space-y-6">
                    <label className="block mb-2 text-sm font-medium text-custom-black">Название товара</label>
                    <Input
                        placeholder="Как сажать малину"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label className="block mb-2 text-sm font-medium text-custom-black">Стоимость товара за 1 единицу</label>
                    <Input
                        placeholder="360 Р"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <label className="block mb-2 text-sm font-medium text-custom-black">Ссылка на картинку</label>
                    <Input
                        placeholder="https://command"
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                    />
                    <label className="block mb-2 text-sm font-medium text-custom-black">Описание</label>
                    <TextArea value={description} onChange={(e)=> setDescription(e.target.value)} placeholder={"Описание"} half={false}/>
                    <div className="flex justify-center">
                        <Button
                            label="Опубликировать"
                            onClick={onSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
