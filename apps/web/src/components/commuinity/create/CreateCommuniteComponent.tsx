import {Button, Input, TextArea} from "@garden/ui";
import {useState} from "react";
import {errorToast} from "@/utils/utils";

export default function CreateCommunityComponent({tags}: any){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [tags1, setTags] = useState("0")

    const onSubmit = async() => {
        const res = await fetch(`/api/community/create`,
            {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    description,
                    tags: tags1
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
                Создания обсуждения
            </h1>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 bg-custom-white rounded-[32px] w-full md:max-w-xl">
                <div className="space-y-4 md:space-y-6">
                    <label className="block mb-2 text-sm font-medium text-custom-black">Название обсуждения</label>
                    <Input
                        placeholder="Как сажать малину"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <div>
                        {tags.data && tags.data.map((tag:any, index:any) => (
                            <Button label={tag.tagName} onClick={() => {setTags(tag.id)}} type={tag.id === tags1 ? "light" : "empty"}/>
                        ))}
                    </div>
                    <label className="block mb-2 text-sm font-medium text-custom-black">Опишите, что хотите обсудить</label>
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
