"use client"
import {RecoilRoot} from "recoil";
import React from 'react';

export function RecoilProvider(props: { children: React.ReactNode }) {
    return(
        <RecoilRoot>
            {props.children}
        </RecoilRoot>
    )
}
