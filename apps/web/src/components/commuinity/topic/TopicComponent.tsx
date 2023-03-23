"use client";

import {TableHead, Topic} from "@garden/ui";

export default function TopicComponent({posts} : any){
    return(
        <div className="relative overflow-x-auto rounded-xl">
            <TableHead/>
            {posts.data && posts.data.map((post:any, index:number) => (
                <Topic key={index} id={post.id} name={post.title} type={post.tag.tagName}/>
            ))}

        </div>

    )
}
