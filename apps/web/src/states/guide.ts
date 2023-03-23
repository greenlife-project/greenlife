"use client";
import {atom} from "recoil";
interface LinkType {
    link: string
    name: string
    description: string
}
export const stepsState = atom({
    key: 'steps', // unique ID (with respect to other atoms/selectors)
    default: [] as LinkType[], // default value (aka initial value)
});
