"use client"
import {BreadCump, Input} from "@garden/ui";
import Link from "next/link";
import {signOut} from "next-auth/react";
import ProfileComponent from "@/components/profile/ProfileComponent";
import {api} from "@/utils/api";


export default function Page(){
    const user = api.auth.getSession.useQuery();
    if(user.isLoading){
        return "Loading..."
    }
    return(
        <>
            <h1 className="text-custom-black font-bold text-xl">Профиль</h1>
            <div className="py-2 px-4 sm:py-4 sm:px-6 ">
                <ProfileComponent first_name={user.data.user.first_name} last_name={user.data.user.last_name}/>
            </div>
        </>
    )
}
