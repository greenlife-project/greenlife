"use client";

import {BreadCump, LongCard} from "@garden/ui";
import {api} from "@/utils/api";
import CommentAdd from "@/components/comment/add/CommentAdd";
import CommentAddCommunity from "@/components/comment/add/CommentAddCommunity";

export default function Page({params: { id }}:any){
    const post = api.post.getPost.useQuery(id);
    if(!post.data){
        return "Loading..."
    }
    const data = post.data
    return(
        <div className="container mx-auto">
            {/*
// @ts-ignore */}
            <BreadCump links={Array.of({label: "Сообщество", href: "/shop"}, {label: "Каталог товаров", href: "/shop"}, {label: data.title, href: ""})}/>
            {/*
// @ts-ignore */}
            <LongCard name={`${data.user.first_name} ${data.user.last_name}`} description={data.description} title={data.title}/>
            <div className={"mt-4 ml-4 [&>*]:mt-2"}>
                {/*
// @ts-ignore */}
                {data.Comment.map((comment:any) => (
                    <LongCard key={comment.id} name={""} description={comment.text} title={`${comment.user.first_name} ${comment.user.last_name}`}/>
                ))}
            </div>

            <div className="mt-2">
                {/*
// @ts-ignore */}
                <CommentAddCommunity id={data.id} />
            </div>

        </div>
    )
}
