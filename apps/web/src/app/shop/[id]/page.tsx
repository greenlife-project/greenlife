"use client";
import {BigCard, BreadCump, Button, Comment, GreenArrowRight, TextArea} from "@garden/ui";
import CardShopComponent from "@/components/card/CardShopComponent";


export default function Page(){
    return(
        <div className="">
            <div>
                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <BreadCump links={Array.of({label: "Интернет-Магазин", href: "/shop"}, {label: "Каталог товаров", href: "/shop"}, {label: "Малина Садовая", href: "/shop/asd"})}/>
                    <div>
                        <BigCard/>
                        <div className="mt-2">
                            <h1>
                                Комментарии
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                                    <Comment/>
                                    <Comment/>
                                </div>
                            </h1>
                        </div>
                        <div className="mt-2">
                            <h1>
                                Добавить комментарий
                            </h1>
                                <div className={"mt-2"}>
                                    <TextArea/>
                                </div>
                                <div className={"mt-2"}>
                                    <Button label={"Отправить комментарий"}/>
                                </div>
                        </div>
                        <div className="mt-2">
                            <h1>
                                Руководтсво по теме
                            </h1>
                            <div className={"mt-2"}>
                                <TextArea/>
                            </div>
                            <div className={"mt-2"}>
                                <Button label={"Отправить комментарий"}/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>

    )
}
