"use client";

import CommunityHeaderComponent from "@/components/commuinity/CommunityHeader";
import {Button, CommunityCard, Loader} from "@garden/ui";
import TopicComponent from "@/components/commuinity/topic/TopicComponent";
import {api} from "@/utils/api";
import Link from "next/link";

export default function Page(){
    const tags = api.tag.getTags.useQuery()
    const posts = api.post.getCountPost.useQuery(3)
    if(tags.isLoading || posts.isLoading){
        return(<>Loading...</>)
    }

    return(
        <div>
            <CommunityHeaderComponent/>
            <div className="container mx-auto">
                <div>
                    <h1 className={"text-center mt-4 text-custom-black text-2xl font-semibold"}>
                        Разделы
                    </h1>
                    <div className="grid grid-cols-2 md:grid-cols-5">
                        {tags.data && tags.data.map((tag) => (
                            <CommunityCard img={""} label={tag.tagName} view={tag.post.length}/>
                        ))}
                    </div>
                </div>
                <div className="float-right mt-2">
                    <Link href={"/community/create"}>
                        <Button label={"создать обсуждение"} type={"light"}/>
                    </Link>

                </div>
                <div className="mt-4">
                    <Button label={"Все метки"}/>
                    <Button label={"Последние"}/>
                    <Button label={"Популярное"}/>
                    <Button label={"По разделам"}/>
                </div>
                <TopicComponent posts={posts}/>
            </div>
        </div>
    )
}
