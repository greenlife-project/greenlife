"use client";
import {atom} from "recoil";

export const stepsState = atom({
    key: 'steps', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});
