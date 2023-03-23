"use client";
import {BigCard, BreadCump, Button, Comment, GreenArrowRight, LongCard, StepCard, TextArea} from "@garden/ui";
import {api} from "@/utils/api";
import CommentAdd from "@/components/comment/add/CommentAdd";
import CardShopComponent from "@/components/card/CardShopComponent";


export default function Page({params: { id }}:any){
    // const item = api.item.getItem.useQuery(id);
    // const items = api.item.getItemsCount.useQuery(4);
    // if(!item.data || !items.data){
    //     return "Loading..."
    // }
    // const data = item.data
    // console.log(data)
    return(
        <div className="my-2">
            <div>
                <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <BreadCump links={Array.of({label: "Справочник", href: "/guide"}, {label: "Главная", href: "/guide"})}/>
                    <section className="pt-6">
                        <div className="grid md:grid-cols-12 gap-5 p-4 m-2">

                            <div className="lg:px-8 md:col-span-9">
                                <LongCard name="sdsd" description={"sdsd"}/>
                                <div className="mt-4">
                                    <StepCard title={"1 Шаг"} description={"sdsd"}/>
                                </div>

                                <div className="mt-2">
                                    <h1>
                                        Комментарии
                                        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                                            {/*{data.Comment.map((comment:any, index:any) => (*/}
                                            {/*    <Comment key={index} text={comment.text} firstname={comment.user.first_name} lastname={comment.user.last_name} date={comment.created.toLocaleString()}/>*/}
                                            {/*))}*/}
                                        </div>
                                    </h1>
                                </div>
                                <div className="mt-2">
                                    {/*<CommentAdd id={data.id}/>*/}
                                </div>
                                <div className="mt-2">
                                    <h1>
                                        Руководтсво по теме
                                    </h1>
                                    <div className={"mt-2"}>
                                        {/*<TextArea/>*/}
                                    </div>
                                    <div className={"mt-2"}>
                                        <Button label={"Отправить комментарий"}/>
                                    </div>
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
                            <div className="bg-custom-white px-10 py-4 rounded-xl md:col-span-3 md:pt-0">
                                <h1 className="mt-4 text-2xl">Навигация</h1>
                                <ul role="list"
                                    className="space-y-4 py-6 text-sm font-medium text-gray-900">
                                    <li className="flex">
                                        <img src={GreenArrowRight.src} className="mr-2"/>
                                        <a href="#" className="font-medium text-lg">Введение</a>
                                    </li>
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
