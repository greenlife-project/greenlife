"use client";

import {Button, TextArea} from "@garden/ui";
import {useState} from "react";
import {api} from "@/utils/api";
import {errorToast} from "@/utils/utils";

export default function CommentAddCommunity({id}:{id: string}){
    const { data: session } = api.auth.getSession.useQuery();
    const addComment = api.post.addCommentItem.useMutation({
        async onSuccess() {
            setText("")
            await api.post.getPost.useQuery(id).refetch()
        }
    });
    const[text, setText] = useState("");
    const onSubmit = async () => {
        if(text.trim().length === 0){
            errorToast("Введите комментарий");
            return
        }
        if(!session){
            errorToast("Войдите аккаунт, чтобы оставить комментарий");
            return
        }
        //@ts-ignore
        addComment.mutate({id: id, text: text, userId: session.user.id})
    }


    return(
        <>
            <h1>
                Добавить комментарий
            </h1>
            <div className={"mt-2"}>
                <TextArea placeholder="Напишите ваш комментарий" onChange={(e) => setText(e.target.value)} value={text} half={false}/>
            </div>
            <div className={"mt-2"}>
                <Button label={"Отправить комментарий"} onClick={() => onSubmit()}/>
            </div>
        </>
    )
}
