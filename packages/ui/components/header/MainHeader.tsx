"use client";

import {Input} from "../input/Input";
import {useState} from "react";
import {Button} from "../button/Button";

export function MainHeader(){
    const[search, setSearch] = useState("");
    return(
        <section className="bg-secondary">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <div className="max-w-screen-md mx-auto">
                    <h1 className="text-custom-white text-2xl">Цифровой помощник садовода и дачника</h1>
                    <form className="flex items-center">
                        <div className="relative w-full mr-2">
                            {/*
// @ts-ignore */}
                            <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={"Как посадить землянику"}/>
                        </div>
                        <Button label={"Искать в сообществе"}/>
                    </form>
                </div>
            </div>
        </section>
    )
}
