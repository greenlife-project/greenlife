"use client";
import {Button, Input, Logo, MenuLink, TextArea} from "@garden/ui";
import {useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {stepsState} from "@/states/guide";
import {errorToast} from "@/utils/utils";
import {api} from "@/utils/api";

export default function AddGuide(){
    const [name, setName] = useState("");
    const [difficult, setDifficult] = useState("easy")
    const [description, setDescription] = useState("")
    const [steps, setSteps] = useRecoilState(stepsState)

    const onSubmit = async() => {
        console.log(name)
        const res = await fetch(`/api/guide/addguide`,
            {
                method: "POST",
                body: JSON.stringify({
                    steps,
                    name: name,
                    difficult,
                    description,
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
                Добавить статью
            </h1>
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-custom-white rounded-[32px] w-full md:max-w-xl">
            <div className="flex justify-center">
                <h1 className="text-2xl">
                    Описание
                </h1>
            </div>
            <div className="space-y-4 md:space-y-6">
                <label className="block mb-2 text-sm font-medium text-custom-black">Название статьи</label>
                <Input
                    placeholder="Как сажать малину"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label className="block mb-2 text-sm font-medium text-custom-black">Уровень сложности</label>
                <div>
                    <Button label={"Легкая"} onClick={() => {setDifficult("easy")}} type={difficult === "easy" ? "light" : "empty"}/>
                    <Button label={"Средняя"} onClick={() => {setDifficult("middle")}} type={difficult === "middle" ? "light" : "empty"}/>
                    <Button label={"Сложная"} onClick={() => {setDifficult("hard")}} type={difficult === "hard" ? "light" : "empty"}/>
                </div>

                <label className="block mb-2 text-sm font-medium text-custom-black">Описание</label>
                <TextArea value={description} onChange={(e)=> setDescription(e.target.value)} placeholder={"Описание"} half={false}/>

                <label className="block mb-2 text-sm font-medium text-custom-black">Шаги</label>
                <div>
                    {steps.map((step, index) => (
                        <Step key={index} index={index+1} steps={steps} setSteps={setSteps}/>
                    ))}
                </div>
                <div className="flex justify-center">
                    <Button
                        label="Добавить шаг"
                        onClick={() => {
                            // @ts-ignore
                            const step = {name: "", index: steps.length > 0 ? steps[steps.length-1].index+1 : 1, description: "", link: ""}
                            // @ts-ignore
                            setSteps([...steps, step])
                        }}
                    />
                </div>
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

function Step({index}: any){
    const [steps, setSteps] = useRecoilState(stepsState)

    return(
        <div className="mt-4">
            <h1 className="text-main text-2xl">{index} Шаг</h1>
            <div className="mt-2">
                <label className="block mb-2 text-sm font-medium text-custom-black">Название шага</label>
                <Input
                    placeholder="Введите название"
                    value={steps[index-1].name}
                    onChange={(e) => {
                        let newSteps = JSON.parse(JSON.stringify(steps));
                        newSteps[index-1].name = e.target.value
                        setSteps(newSteps)
                    }}
                />
            </div>
            <div className="mt-2">
                <label className="block mb-2 text-sm font-medium text-custom-black">Описание шага</label>
                <TextArea value={steps[index-1].description} onChange={(e)=>{
                    let newSteps = JSON.parse(JSON.stringify(steps));
                    newSteps[index-1].description = e.target.value
                    setSteps(newSteps)
                }} placeholder={"Описание"} half={false}/>
            </div>
            <div className="mt-2">
                <label className="block mb-2 text-sm font-medium text-custom-black">Ссылка на картинку</label>
                <Input
                    placeholder="Ссылка"
                    value={steps[index-1].link}
                    onChange={(e) => {
                        let newSteps = JSON.parse(JSON.stringify(steps));
                        newSteps[index-1].link = e.target.value
                        setSteps(newSteps)
                    }}
                />
            </div>
            <div className="flex justify-center mt-4">
                <Button
                    label="Удалить"
                    onClick={() => {
                        setSteps(steps.filter((step) => step.index !== index))
                    }}
                />
            </div>
        </div>
    )
}
