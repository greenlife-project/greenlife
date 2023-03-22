"use client";

import {Input} from "../input/Input";
import {useState} from "react";
import {Button} from "../button/Button";

export function GuideHeader(){
    const[search, setSearch] = useState("");
    return(
        <section className="bg-secondary">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <div className="max-w-screen-md mx-auto">
                    <h1 className="text-custom-white text-2xl">Справочник</h1>
                    <form className="flex items-center">
                        <div className="relative w-full mr-2">
                            
                            <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={"Как посадить землянику"}/>
                        </div>
                        <Button label={"Искать в справочнике"}/>
                    </form>
                    {/*<div className="flex items-center justify-center ">*/}
                    {/*    <div className="mr-2">*/}
                    {/*        <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder={"Как посадить землянику"}/>*/}
                    {/*    </div>*/}
                    {/*    <Button label={"Искать в справочнике"} />*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    )
}
