"use client"
import {Header} from "@garden/ui";
import { api } from "@/utils/api";

export default function HeaderComponent(){
    const user = api.auth.getSession.useQuery();
    return(
        <Header isLogin={!!user.data}/>
    )
}
