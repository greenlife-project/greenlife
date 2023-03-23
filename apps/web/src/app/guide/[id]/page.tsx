"use client";
import {BigCard, BreadCump, Button, Comment, GreenArrowRight, LongCard, StepCard, TextArea} from "@garden/ui";
import {api} from "@/utils/api";
import CommentAdd from "@/components/comment/add/CommentAdd";
import CardShopComponent from "@/components/card/CardShopComponent";
import CommentAddGuild from "@/components/comment/add/ComponentAddGuid";


export default function Page({params: { id }}:any){
    const guide = api.guide.getGuide.useQuery(id);
    const items = api.guide.getGuideount.useQuery(4);
    if(!guide.data || !items.data){
        return "Loading..."
    }
    const data = guide.data
    console.log(data)
    return(
        <div className="my-2">
            <div>
                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <BreadCump links={Array.of({label: "Справочник", href: "/guide"}, {label: "Главная", href: "/guide"})}/>
                    <section className="pt-6">
                        <div className="grid md:grid-cols-12 gap-5 p-4 m-2">

                            <div className="lg:px-8 md:col-span-9">
                                {/*
// @ts-ignore */}
                                <LongCard name={`${data.user.first_name} ${data.user.last_name}`} description={data.description} title={data.title}/>
                                {/*
// @ts-ignore */}
                                {data.steps.map((step:any, index:any) => (
                                    <div className="mt-4">
                                        <StepCard title={`${index+1} Шаг ${step.title}`} description={step.description} img={step.img}/>
                                    </div>
                                ))}

                                <div className="mt-2">
                                    <h1>
                                        Комментарии
                                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                                            {/*
// @ts-ignore */}
                                            {data.comments.map((comment:any, index:any) => (
                                                <Comment key={index} text={comment.text} firstname={comment.user.first_name} lastname={comment.user.last_name} date={comment.created.toLocaleString()}/>
                                            ))}
                                        </div>
                                    </h1>
                                </div>
                                <div className="mt-2">
                                    {/*
// @ts-ignore */}
                                    <CommentAddGuild id={data.id}/>
                                </div>
                                <div className="mt-2">
                                    <h1>
                                        Вам также могут понравиться
                                    </h1>
                                    <div className={"mt-2 md:flex [&>*]:mr-2"}>
                                        {/*{items.data.map((item) => (*/}
                                        {/*    <CardShopComponent title={item.title} price={item.price} imgURL={item.img} id={item.id}/>*/}
                                        {/*))}*/}
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block bg-custom-white px-10 py-4 rounded-xl md:col-span-3 md:pt-0">
                                <h1 className="mt-4 text-2xl">Навигация</h1>
                                <ul role="list"
                                    className="space-y-4 py-6 text-sm font-medium text-gray-900">
                                    <li className="flex">
                                        <img src={GreenArrowRight.src} className="mr-2"/>
                                        <a href="#" className="font-medium text-lg">Введение</a>
                                    </li>
                                    {/*
// @ts-ignore */}
                                    {data.steps.map((step:any, index:any) => (
                                        <li className="flex ">
                                            <img src={GreenArrowRight.src} className="mr-2"/>
                                            <a href="#" className="font-medium text-lg">{index+1} Шаг {step.title}</a>
                                        </li>
                                        ))}
                                    <li className="flex ">
                                        <img src={GreenArrowRight.src} className="mr-2"/>
                                        <a href="#" className="font-medium text-lg">Комментарии</a>
                                    </li>
                                    <li className="flex ">
                                        <img src={GreenArrowRight.src} className="mr-2"/>
                                        <a href="#" className="font-medium text-lg">Оставить комментарий</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>

            </div>
        </div>

    )
}
