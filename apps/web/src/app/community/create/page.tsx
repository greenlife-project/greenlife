"use client";
import {Button, Input, Logo, MenuLink, TextArea} from "@garden/ui";
import {useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {stepsState} from "@/states/guide";
import {errorToast} from "@/utils/utils";
import {api} from "@/utils/api";
import CreateCommunityComponent from "@/components/commuinity/create/CreateCommuniteComponent";



export default function AddGuide(){
    const tags = api.tag.getTags.useQuery()
    if(tags.isLoading){
        return <>Loading...</>
    }


    return(
        <CreateCommunityComponent tags={tags}/>
    )
}
